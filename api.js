const axios = require('axios');
const fs = require('fs');

require('dotenv').config({
  path: `.env`,
});


(async () => {
  const { data } = await axios.get(`/navigation/render/2`, {
    baseURL: 'https://api.viva-la-vita.org/api',
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`,
    },
    params: {
      type: 'TREE'
    }
  });

  for (const series of data) {
    fs.mkdirSync(`docs${series.path}`, { recursive: true });
    fs.writeFileSync(`docs${series.path}/_category_.json`, JSON.stringify({
      label: series.title,
      position: series.order,
      link: {
        type: "generated-index"
      }
    }));

    for (const article of series.items) {
      const yaml = `---\ntitle: ${article.title}\nsidebar_position: ${article.order}\n---\n`;
      const body = article.related.content.replaceAll(/^(#+)/gm, '#$1');
      fs.writeFileSync(`docs${article.path}.md`, `${yaml}\n${body}`);
    }
  }
})();
