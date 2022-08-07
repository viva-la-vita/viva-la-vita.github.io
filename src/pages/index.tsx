import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/favicon.ico" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://wiki.viva-la-vita.org"
            style={{margin: "1rem"}}>
            知识库
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://bbs.viva-la-vita.org"
            style={{margin: "1rem"}}>
            论坛
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageAfdian() {
  return <div className="container" style={{padding: "2rem"}}>
    <p>
      生如夏花社区的运营离不开域名、服务器和其他技术基础设施的购买与维护。为了让生如夏花能够持续地为您提供免费的内容及交流环境，您可以选择在爱发电平台上赞助我们，包括一次性赞助和按月赞助两种形式。
      您的赞助将有 94% 被我们收到，剩余 6% 用于爱发电平台本身的维护；我们收到的部分将全部用于支付运营成本。
    </p>
    <div className={styles.buttons}>
      <Link
        className="button button--primary button--lg"
        to="https://afdian.net/@vivalavita"
        style={{margin: "1rem"}}>
        爱发电主页
      </Link>
    </div>
  </div>
}

function HomepageManifesto() {
  return <div className="container" style={{padding: "2rem"}}>
    <p>
      「生如夏花」是一个以各种不同的性体验的探索为主题的线上社区。我们认为，对于美好而新奇的性体验的追求具有内在的价值，它是一种关爱自己身体与心灵的朴素活动，也是一种积极向上的生活方式。我们希望，社区中的成员可以通过对性愉悦感的觉察，实现精神上的丰富与完整，更好地追求属于自己的独一无二的幸福（eudaimonia）。
    </p>
    <p>
      本社区在价值观上接近于<a href="https://zh.wikipedia.org/wiki/%E5%8A%9F%E5%88%A9%E4%B8%BB%E7%BE%A9" target="_blank">功利主义</a>，以追求个体和群体的最大效用（或称幸福、快乐）为行事的准则，而不对任何人和事物进行伦理道德上的评价。因此，本社区以知识库的形式长期维护关于不同性体验的知识介绍，然后通过成员自发的实践来使得每个人的效用得到增加。此外，为了更好地服务于成员，本社区提供了论坛和 Telegram 群聊作为讨论的空间，实质上是不排斥一般话题的泛性感话题（即与性相关的一切话题）的交流场所。通过交流讨论与成员自发的实践，我们也能够持续地产生新的知识并将它们不断更新到知识库中。
    </p>
    <p>
      本社区的成员在各种意义上具有较高的多样性，他们可能来自社会的各个阶层，有不同的价值观和性格特质；特别地，他们有各种不同的性取向（异性恋、同性恋、双性恋、无性恋、泛性恋等等）、性认同、性保守/自由倾向；他们还可能属于各种群体（特别是药娘、伪娘等）。由于这种差异性的存在，本社区希望成员保持包容、理解和共存的态度，支持成员基于自己的价值观和特质的各种立场与行为，除非违反法律法规或妨害到了其他人的相同权利。本社区在这些问题上不持任何观点和立场，也不赞同将某种特定的性体验与上述任何特定的群体进行绑定、缝合的言论和行为，更不支持任何特定群体在本社区中占据言论主导地位。
    </p>
    <p>
      加入本社区（即注册论坛帐号或加入官方 Telegram 群聊）即表明您已年满 18 周岁、同意遵守在论坛或群聊中发言的具体规定、并且理解本社区不对您在上述场所之外的言论和行为（特别是开发自己身体的行为）负责任。祝愿您幸福快乐地度过每一天。
    </p>
  </div>
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎来到${siteConfig.title}`}
      description="探索美好而新奇的性体验">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <hr />
        <HomepageManifesto />
        <hr />
        <HomepageAfdian />
      </main>
    </Layout>
  );
}
