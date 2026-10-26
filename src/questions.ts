export interface Question {
  id: number;
  text: string;
  source: {
    theory: string; // 理論・フレームワーク名
    description: string; // 概要
    reference?: {
      title: string; // 出典（書籍名、論文タイトル、解説サイト等）
      url: string; // リンク先URL
    };
  };
}

export const questions: Question[] = [
  {
    id: 1,
    text: "最近、これまでの「当たり前」を疑い、やり方を変えてみたことは何ですか？",
    source: {
      theory: "ダブルループ学習",
      description:
        "既存の前提やフレームワークそのものを問い直し、根本的な行動変容や構造的改善を促す。",
      reference: {
        title: "Chris Argyris - Teaching Smart People How to Learn (HBR)",
        url: "https://hbr.org/1991/05/teaching-smart-people-how-to-learn",
      },
    },
  },
  {
    id: 2,
    text: "もし明日から時間や予算の制約がすべてなくなったとしたら、最初に何に取り取り組みますか？",
    source: {
      theory: "GROWモデル",
      description:
        "制約条件による認知のバイアスを取り払い、真の目的や本質的な欲望を発掘する。",
      reference: {
        title: "Sir John Whitmore - Coaching for Performance",
        url: "https://www.performanceconsultants.com/grow-model",
      },
    },
  },
  {
    id: 3,
    text: "最近の取り組みの中で、最も「心理的な安心感」を感じた瞬間はどんなときでしたか？",
    source: {
      theory: "心理的安全性",
      description:
        "発言や挑戦が歓迎される状態を振り返り、ポジティブな行動パターンを再現可能にする。",
      reference: {
        title: "Amy Edmondson - Psychological Safety in Work Teams (1999)",
        url: "https://www.jstor.org/stable/2666999",
      },
    },
  },
  {
    id: 4,
    text: "成果や前進を阻んでいる、誰もが気づいているのに口に出していない「違和感」は何ですか？",
    source: {
      theory: "エレファント・イン・ザ・ルーム",
      description:
        "集団や個人の中で見過ごされがちな本質的・構造的な課題に光を当て、透明性の高い対話を促す。",
      reference: {
        title: "Eviatar Zerubavel - The Elephant in the Room",
        url: "https://global.oup.com/academic/product/the-elephant-in-the-room-9780195332605",
      },
    },
  },
  {
    id: 5,
    text: "今日や最近のプロセスの中で、「もっと小さく素早く試せたこと」は何ですか？",
    source: {
      theory: "経験主義 (Empiricism)",
      description:
        "失敗を学習の機会と捉え、小さな実験（検査と適応）を通じて継続的改善のサイクルを回す。",
      reference: {
        title: "Scrum Guide - Empiricism",
        url: "https://scrumguides.org/scrum-guide.html#scrum-theory",
      },
    },
  },
];
