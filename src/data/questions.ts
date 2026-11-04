import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: 1,
    text: "今の自分のコンディションや気分を『お天気』に例えると何ですか？",
    depth: "light",
    source: {
      theory: "認知の焦点化・マインドフルネス",
      description:
        "言語化しにくい疲労感や気分を直感的に捉え、自分の状態を客観視する。",
    },
  },
  {
    id: 2,
    text: "今、自分のエネルギー残量は100点満点中何点くらいですか？",
    depth: "light",
    source: {
      theory: "エナジー・マネジメント（Jim Loehr）",
      description:
        "自身のエネルギーレベルを数値で可視化し、適切なペース配分を意識する。",
    },
  },
  {
    id: 3,
    text: "今の自分のバッテリー状態は『充電中』『フル』『残りわずか』のどれに近いですか？",
    depth: "light",
    source: {
      theory: "自己調整理論（Self-Regulation Theory）",
      description: "リソースの枯渇具合を意識し、休息の必要性を自己検知する。",
    },
  },
  {
    id: 4,
    text: "今の頭のスッキリ感は、朝霧、晴天、曇りのどれに近いですか？",
    depth: "light",
    source: {
      theory: "メタ認知（Metacognition）",
      description: "自分の認知資源（思考の鮮明さ）の現在地を把握する。",
    },
  },
  {
    id: 5,
    text: "今の自分の感覚は、アクセルとブレーキのどちらを踏んでいる感じですか？",
    depth: "light",
    source: {
      theory: "ポリヴェーガル理論（Stephen Porges）",
      description:
        "交感神経（興奮・緊張）と副交感神経（ブレーキ）のバランスを認識する。",
    },
  },
  {
    id: 6,
    text: "今日の自分を乗り物（新幹線、自転車、徒歩など）に例えると何ですか？",
    depth: "light",
    source: {
      theory: "メタファー思考",
      description: "比喩を用いて現在のスピード感や負担感を客観的に捉える。",
    },
  },
  {
    id: 7,
    text: "今の自分のエンジンはすぐに動かせそうでしょうか？それとも暖機運転が必要ですか？",
    depth: "light",
    source: {
      theory: "準備性（Readiness）の評価",
      description: "作業着手前の認知的なウォームアップの必要度を自覚する。",
    },
  },
  {
    id: 8,
    text: "今日ここまでの自分のペースは『ハイペース』『マイペース』『スローペース』のどれですか？",
    depth: "light",
    source: {
      theory: "ペースセッティング",
      description: "自分の行動速度をモニタリングし、オーバーワークを防ぐ。",
    },
  },
  {
    id: 9,
    text: "今、身体のどこかに『重さ』や『軽さ』を感じる部分はありますか？",
    depth: "light",
    source: {
      theory: "ソマティック・アウェアネス（身体感覚的気づき）",
      description: "身体の部位ごとの感覚に注意を向け、体調の変化に気づく。",
    },
  },
  {
    id: 10,
    text: "今日の自分の状態をスマホのステータスアイコンで表すと何ですか？",
    depth: "light",
    source: {
      theory: "視覚的シンボル化",
      description:
        "日常的なピクトグラムを用いて自分のコンディションを簡易表現する。",
    },
  },
  {
    id: 11,
    text: "今、一番身体の力が抜けていてリラックスしているパーツはどこですか？",
    depth: "light",
    source: {
      theory: "筋弛緩法（Progressive Muscle Relaxation）",
      description: "弛緩している部位に意識を向け、安心感を身体全体へ広げる。",
    },
  },
  {
    id: 12,
    text: "今、目の前のタスクに対する集中力は何分くらい続きそうな感覚ですか？",
    depth: "light",
    source: {
      theory: "ポモドーロ・テクニック / 認知資源管理",
      description: "持続可能な集中時間を予測し、適切な作業設計につなげる。",
    },
  },
  {
    id: 13,
    text: "今日の自分のバイオリズム（調子の波）は、上向き・下向き・平坦のどれですか？",
    depth: "light",
    source: {
      theory: "サーカディアンリズムの自己モニタリング",
      description: "時間帯によるパフォーマンスの変化を受け入れる。",
    },
  },
  {
    id: 14,
    text: "今、自分の頭の中のBGMのテンポは速いですか？遅いですか？",
    depth: "light",
    source: {
      theory: "内言（Inner Speech）の観察",
      description: "思考の回転速度や焦りの度合いを間接的に把握する。",
    },
  },
  {
    id: 15,
    text: "今、一番主張している身体の感覚（眠気、空腹、肩こりなど）は何ですか？",
    depth: "light",
    source: {
      theory: "内受容感覚（Interoception）",
      description: "身体内部からのシグナルを正しく察知し、生理的欲求に応える。",
    },
  },
  {
    id: 16,
    text: "今日の自分の『省エネモード』度は何％ですか？",
    depth: "light",
    source: {
      theory: "セルフ・コンパッション",
      description:
        "完璧を目指さず、現状のエネルギーに応じた妥当な出力を許可する。",
    },
  },
  {
    id: 17,
    text: "今、自分のなかの『やる気スイッチ』はどのあたりにありそうでしょうか？",
    depth: "light",
    source: {
      theory: "作業興奮理論（Emil Kraepelin）",
      description: "行動の引き金となるトリガーを意識化する。",
    },
  },
  {
    id: 18,
    text: "今の自分を動物に例えると、どんな姿勢で過ごしていますか？",
    depth: "light",
    source: {
      theory: "投映法 / 象徴的思考",
      description:
        "動物の姿を借りて自身の無意識の警戒レベルや寛ぎ度を表現する。",
    },
  },
  {
    id: 19,
    text: "今日、自分の『心のキャパシティ』はどれくらい残っていますか？",
    depth: "light",
    source: {
      theory: "自我消耗（Ego Depletion）モデル",
      description:
        "意志力や寛容さの残量を把握し、刺激の多い環境を避ける判断基準とする。",
    },
  },
  {
    id: 20,
    text: "今、この場所での居心地の良さは10点満点中何点ですか？",
    depth: "light",
    source: {
      theory: "環境心理学（Environmental Psychology）",
      description: "周囲の環境が与える心理的影響をチェックする。",
    },
  },
  {
    id: 21,
    text: "今、自分の気分を一色で表すとしたら何色ですか？",
    depth: "light",
    source: {
      theory: "カラー心理学・感情表現",
      description: "言語化が難しい非定型な感情を色彩で表現する。",
    },
  },
  {
    id: 22,
    text: "今、心の中に一番近くに居座っている感情は何ですか？",
    depth: "light",
    source: {
      theory: "感情の粒度（Emotional Granularity）",
      description:
        "モヤモヤした気分の正体を特定し、名前をつけることで鎮静化する。",
    },
  },
  {
    id: 23,
    text: "今の気分を『香り』に例えるとどんな感じですか？",
    depth: "light",
    source: {
      theory: "クロスモーダル知覚",
      description: "五感の繋がりを利用して感情のニュアンスを繊細に捉える。",
    },
  },
  {
    id: 24,
    text: "今の自分の心模様を風景にするなら、どんな景色が広がっていますか？",
    depth: "light",
    source: {
      theory: "イメージ心理療法",
      description: "内面の状態を風景として可視化し、客観的な観測者となる。",
    },
  },
  {
    id: 25,
    text: "今、一番自分の心に優しくしてあげたいポイントはどこですか？",
    depth: "light",
    source: {
      theory: "セルフ・コンパッション（Kristin Neff）",
      description: "自己批判をやめ、自分自身に対する慈しみの態度を養う。",
    },
  },
  {
    id: 26,
    text: "今、ワクワク・ホッとする・モヤモヤのうち、どれが最も近いですか？",
    depth: "light",
    source: {
      theory: "感情の2軸モデル（Core Affect）",
      description: "快・不快と覚醒度の2軸から感情の基本位置を分類する。",
    },
  },
  {
    id: 27,
    text: "今の自分の気分を『音楽のジャンル』に例えると何ですか？",
    depth: "light",
    source: {
      theory: "リズムと感情の同調",
      description:
        "内面のグルーヴや混乱具合を音楽ジャンルに置き換えて把握する。",
    },
  },
  {
    id: 28,
    text: "今、心の水面に波風は立っていますか？それとも穏やかですか？",
    depth: "light",
    source: {
      theory: "マインドフルネス / 感情の波",
      description:
        "感情の揺れを外部の出来事と切り離し、単なる『波』として観察する。",
    },
  },
  {
    id: 29,
    text: "今、自分自身の『ご機嫌度』を点数にすると何点ですか？",
    depth: "light",
    source: {
      theory: "主観的ウェルビーイング（Subjective Well-being）",
      description: "自己の即時的な充足感を自己点検する。",
    },
  },
  {
    id: 30,
    text: "今、胸や頭のあたりはどんな温度感（あたたかい・ひんやりなど）ですか？",
    depth: "light",
    source: {
      theory: "身体的感情マッピング（Embodied Emotion）",
      description: "感情に伴う身体の局所的な体温変化に意識を向ける。",
    },
  },
  {
    id: 31,
    text: "今、一番自分をホッとさせてくれる言葉は何ですか？",
    depth: "light",
    source: {
      theory: "アファメーション / セルフコープ",
      description: "自己肯定感を回復させる安らぎの言葉を見出す。",
    },
  },
  {
    id: 32,
    text: "ここ最近で『思わずクスッと笑ったこと』や『ほっこりしたこと』は何ですか？",
    depth: "light",
    source: {
      theory: "拡張-形成理論（Barbara Fredrickson）",
      description: "ポジティブ感情を喚起し、思考と行動の枠組みを広げる。",
    },
  },
  {
    id: 33,
    text: "今、ちょっとだけ『面倒だな』『億劫だな』と感じていることは何ですか？",
    depth: "light",
    source: {
      theory: "抵抗感の受容（Acceptance）",
      description: "ネガティブな感情を否定せず、そのまま認知する。",
    },
  },
  {
    id: 34,
    text: "今、頑張っている自分に対して一言だけ労いをかけるなら何ですか？",
    depth: "light",
    source: {
      theory: "自己認知的アプローチ",
      description: "他者に求める慰めを自ら自分自身に提供する能力を高める。",
    },
  },
  {
    id: 35,
    text: "今、心の中に『余白』は残っていますか？それとも詰まっていますか？",
    depth: "light",
    source: {
      theory: "ワーキングメモリ論",
      description: "思考の空き容量を自覚し、情報過多を防ぐ。",
    },
  },
  {
    id: 36,
    text: "今日の自分の気分にぴったりの飲み物を選ぶなら何ですか？",
    depth: "light",
    source: {
      theory: "感覚的セルフケア",
      description:
        "求める味覚や質感から、今必要としている刺激や癒やしを察知する。",
    },
  },
  {
    id: 37,
    text: "今、心が『YES（前向き）』と感じている対象は何ですか？",
    depth: "light",
    source: {
      theory: "アプローチ動機づけ（Approach Motivation）",
      description: "自分の本心が惹かれている方向性を確認する。",
    },
  },
  {
    id: 38,
    text: "今、ふと感じている小さな違和感や引っかかりはありますか？",
    depth: "light",
    source: {
      theory: "フェルティング・センス（Eugene Gendlin / フォーカシング）",
      description: "まだ言葉にならないモヤモヤとした感覚に注意を寄せる。",
    },
  },
  {
    id: 39,
    text: "今、誰かに打ち明けたい小さなつぶやきはありますか？",
    depth: "light",
    source: {
      theory: "カタルシス効果（心理的排泄）",
      description: "内的言語を外に吐き出すことで精神的負担を軽減する。",
    },
  },
  {
    id: 40,
    text: "今日、自分の心を少しだけ躍らせたものは何でしたか？",
    depth: "light",
    source: {
      theory: "マイクロ・ジョイ（Micro-joys）",
      description: "日常に潜む極小の喜びに目を向ける訓練。",
    },
  },
  {
    id: 41,
    text: "無意識に肩や首に力が入っていませんか？一度落としてみましょう。",
    depth: "light",
    source: {
      theory: "ソマティック・リフレクション",
      description: "身体的緊張の自動応答をリセットする。",
    },
  },
  {
    id: 42,
    text: "今、自分の呼吸は浅いですか？それとも深く吸えていますか？",
    depth: "light",
    source: {
      theory: "マインドフル・ブリージング",
      description: "呼吸の観察を通じて自律神経のモードを意識化する。",
    },
  },
  {
    id: 43,
    text: "今、座っている（立っている）姿勢で、一番楽だと感じる形はどんな姿勢ですか？",
    depth: "light",
    source: {
      theory: "人間工学 / 自在性（Affordance）",
      description: "身体への負荷が少ない姿勢へ自発的に再調整する。",
    },
  },
  {
    id: 44,
    text: "今、両足の裏がしっかり地面に着いている感覚（グラウンディング）はありますか？",
    depth: "light",
    source: {
      theory: "グラウンディング技法",
      description:
        "足裏の触覚に意識を集中させ、思考の空回り（頭の緊張）を鎮める。",
    },
  },
  {
    id: 45,
    text: "今、眉間や奥歯に力が入っていませんか？軽く緩めてみましょう。",
    depth: "light",
    source: {
      theory: "バイオフィードバック的自己認識",
      description:
        "顔面筋の緊張を緩め、フェイシャルフィードバック効果で気分を和らげる。",
    },
  },
  {
    id: 46,
    text: "今、手のひらや指先の温度はあたたかいですか？冷たいですか？",
    depth: "light",
    source: {
      theory: "自律訓練法（Autogenic Training）",
      description: "末梢血管の拡張状態（リラックス度）を温度覚で確かめる。",
    },
  },
  {
    id: 47,
    text: "今、お腹のあたりはリラックスしていますか？それとも緊張していますか？",
    depth: "light",
    source: {
      theory: "腸脳相関（Gut-Brain Axis）の意識化",
      description: "腹部の違和感や緊迫感をストレスシグナルとして受信する。",
    },
  },
  {
    id: 48,
    text: "今、目の疲れ具合を10点満点（10が限界）で表すと何点ですか？",
    depth: "light",
    source: {
      theory: "VDT作業ストレス管理",
      description:
        "視覚的疲労を自覚し、目を閉じる・遠くを見るなどの休憩を促す。",
    },
  },
  {
    id: 49,
    text: "最後にゆっくり息を吐き切ったのはいつですか？今一度、ため息をついてみましょう。",
    depth: "light",
    source: {
      theory: "サイクリック・サイイング（Cyclic Sighing）",
      description:
        "呼気を長くする溜め息運動により、副交感神経を急速に優位にする。",
    },
  },
  {
    id: 50,
    text: "今、体のどこかにコリや違和感を覚える場所はありますか？",
    depth: "light",
    source: {
      theory: "ボディスキャン（Body Scan）",
      description: "頭頂から足先まで頭の中でスキャンし、体の痛みの声を聴く。",
    },
  },
  {
    id: 51,
    text: "今、背もたれや椅子に体重を完全に預けられていますか？",
    depth: "light",
    source: {
      theory: "支持面への定位",
      description: "身体を委ねる感覚（Surrender）を得て安心感を育む。",
    },
  },
  {
    id: 52,
    text: "今、手先や脚をちょっとだけブラブラとゆすってみて、どう感じますか？",
    depth: "light",
    source: {
      theory: "微細運動による緊張解放",
      description: "小刻みな振動によって固定化した筋肉のハリをほぐす。",
    },
  },
  {
    id: 53,
    text: "今、自分の一番疲れている身体の部位に「お疲れ様」と言うならどこですか？",
    depth: "light",
    source: {
      theory: "身体的セルフ・コンパッション",
      description: "酷使している身体部位への感謝を通じて自己愛を高める。",
    },
  },
  {
    id: 54,
    text: "今、周囲の温度（寒さ・暑さ）は自分にとって快適ですか？",
    depth: "light",
    source: {
      theory: "快適性の自己調整",
      description: "熱的快適性（Thermal Comfort）を整える行動を促す。",
    },
  },
  {
    id: 55,
    text: "今、耳に入ってくる音の中で、一番心地よく聞こえる音は何ですか？",
    depth: "light",
    source: {
      theory: "サウンドスケープ意識",
      description:
        "環境音への注意の配分を変えることで、意識を今ここに集中させる。",
    },
  },
  {
    id: 56,
    text: "今、喉の乾きや水分不足を感じていませんか？",
    depth: "light",
    source: {
      theory: "基本欲求モニタリング",
      description: "脱水による認知機能低下や不快感を未然に防止する。",
    },
  },
  {
    id: 57,
    text: "今、五感（視・聴・嗅・味・触）の中で一番休ませたい感覚は何ですか？",
    depth: "light",
    source: {
      theory: "感覚過多（Sensory Overload）の防止",
      description: "疲弊している感覚器官を特定し、デジタルデトックス等を促す。",
    },
  },
  {
    id: 58,
    text: "今、全身が『ゆるんでいる』としたら何％くらいでしょうか？",
    depth: "light",
    source: {
      theory: "リラクゼーション尺度の自己評価",
      description: "弛緩度合いを意識化することで、さらなる脱力を誘導する。",
    },
  },
  {
    id: 59,
    text: "今、外の光や室内の明るさは自分にとってちょうど良いですか？",
    depth: "light",
    source: {
      theory: "光刺激の管理",
      description: "視覚刺激の強さを調整し、脳の疲労を和らげる。",
    },
  },
  {
    id: 60,
    text: "今、ゆっくりと深呼吸を1回したとき、身体のどこが膨らみましたか？",
    depth: "light",
    source: {
      theory: "胸式/腹式呼吸の自己検知",
      description:
        "呼吸時の身体の動きにアテンションを向け、覚醒レベルを抑える。",
    },
  },
  {
    id: 61,
    text: "今日、自分のために用意したい『小さな楽しみ・ご褒美』は何ですか？",
    depth: "light",
    source: {
      theory: "報酬系（Dopamine System）の活性化",
      description: "身近なワクワクを先回りして設定し、日常の意欲を補給する。",
    },
  },
  {
    id: 62,
    text: "今日、これだけは守りたい『自分のペース』や『機嫌』は何ですか？",
    depth: "light",
    source: {
      theory: "バウンダリー（境界線）の設定",
      description: "他者や忙しさに流されない独自の軸をあらかじめ宣言する。",
    },
  },
  {
    id: 63,
    text: "今日、あえて『やらないこと』を1つ決めるとしたら何ですか？",
    depth: "light",
    source: {
      theory: "Not-To-Do リスト / 認知資源の節約",
      description: "やることを減らす意思決定により、エネルギーの散逸を防ぐ。",
    },
  },
  {
    id: 64,
    text: "今、このあと最初の一歩としてサクッと終わらせたい小さなことは何ですか？",
    depth: "light",
    source: {
      theory: "2分ルール（GTD法 / David Allen）",
      description:
        "極小の作業に着手することで、作業興奮を引き出して着手を容易にする。",
    },
  },
  {
    id: 65,
    text: "今日、自分のために選んでみたいお供（お茶、お菓子、音楽など）は何ですか？",
    depth: "light",
    source: {
      theory: "マイクロ・セルフケア",
      description: "小さな選択権を行使し、自分を大切にしている実感を育む。",
    },
  },
  {
    id: 66,
    text: "今日、自分に唱えてあげたい『お守りの言葉（合言葉）』は何ですか？",
    depth: "light",
    source: {
      theory: "セルフ・トーク（Self-Talk）",
      description: "前向きな内的対話を用いて、プレッシャーや不安を和らげる。",
    },
  },
  {
    id: 67,
    text: "今、デスク周りや手元を1点だけ整えるとしたら、どこを動かしますか？",
    depth: "light",
    source: {
      theory: "環境のアフォーダンス・エンハンスメント",
      description: "わずかな環境整備を通じてコントロール感を取り戻す。",
    },
  },
  {
    id: 68,
    text: "今日、一番エネルギーを注ぎたい『一瞬』はどの時間帯ですか？",
    depth: "light",
    source: {
      theory: "選択と集中（Intentionality）",
      description: "重点を置く時間帯を明確にし、メリハリのある1日を作る。",
    },
  },
  {
    id: 69,
    text: "今、姿勢を変えたり窓の外を見たりして、気分をリフレッシュしてみませんか？",
    depth: "light",
    source: {
      theory: "ステート・シフト（状態変容）",
      description:
        "物理的な視点や身体状態を変えることで、思考のループを断ち切る。",
    },
  },
  {
    id: 70,
    text: "今日、小さな達成感を味わうためにクリアしたい『超ミニ目標』は何ですか？",
    depth: "light",
    source: {
      theory: "スモールウィン効果（Teresa Amabile）",
      description: "確実に達成可能な極小の目標を定め、自己効力感を補強する。",
    },
  },
  {
    id: 71,
    text: "今日、誰かにちょっとした『感謝』や『挨拶』を伝えるなら誰にしますか？",
    depth: "light",
    source: {
      theory: "向社会的行動（Prosocial Behavior）",
      description: "他者への肯定的なアプローチを通じて自らの幸福度を高める。",
    },
  },
  {
    id: 72,
    text: "今、自分の肩の荷を少し軽くするために『手放せる思い込み』はありますか？",
    depth: "light",
    source: {
      theory: "認知の再評価（Cognitive Reappraisal）",
      description: "「〜しなければならない」という拘束的な思考を緩める。",
    },
  },
  {
    id: 73,
    text: "今日、自分の「ご機嫌スイッチ」を入れるためにできる最も簡単なことは？",
    depth: "light",
    source: {
      theory: "行動活性化（Behavioral Activation）",
      description:
        "気分が変わるのを待つのではなく、小さな行動によって気分を誘発する。",
    },
  },
  {
    id: 74,
    text: "今、一番楽しみにできる『次の休み』や『一息つける時間』はいつですか？",
    depth: "light",
    source: {
      theory: "予期的喜び（Anticipatory Pleasure）",
      description:
        "未来の楽しみを思い描くことで、現在のストレスに対する耐性を高める。",
    },
  },
  {
    id: 75,
    text: "今日、自分の機嫌を損ねそうな要素があれば、どう回避しますか？",
    depth: "light",
    source: {
      theory: "先行選択（Pre-commitment）",
      description: "不快な刺激を予防・回避するための事前の工夫を凝らす。",
    },
  },
  {
    id: 76,
    text: "今、この瞬間に『完了』させてスッキリできるものは何ですか？",
    depth: "light",
    source: {
      theory: "ツァイガルニク効果の解消",
      description:
        "未完了のタスクを1つ終わらせ、脳の不要なバックグラウンド処理を止める。",
    },
  },
  {
    id: 77,
    text: "今日、自分のペースを乱されそうになったら、どんなアクションでリセットしますか？",
    depth: "light",
    source: {
      theory: "If-Thenプランニング",
      description:
        "「もし〜となったら〜する」というリセットルールを事前に決めておく。",
    },
  },
  {
    id: 78,
    text: "今、少しだけ立ち止まって自分に『今、何がしたい？』と訊くとしたら？",
    depth: "light",
    source: {
      theory: "内発的動機づけの確認",
      description: "他者主導の行動から、自分の意志主導の意識へ切り替える。",
    },
  },
  {
    id: 79,
    text: "今日、自分の身の回りで『心地よさ』を増やすために工夫できることは？",
    depth: "light",
    source: {
      theory: "環境へのアクティブ・アダプテーション",
      description: "身の回りの微調整を通じて、主体的な快適性を獲得する。",
    },
  },
  {
    id: 80,
    text: "今日、自分を褒めてあげたい『小さな選択』はすでにありましたか？",
    depth: "light",
    source: {
      theory: "自己承認（Self-Acknowledgment）",
      description: "自分の下した日常の正しい決断に自ら光をあてる。",
    },
  },
  {
    id: 81,
    text: "今、視界に入る中で一番『お気に入り』のモノは何ですか？",
    depth: "light",
    source: {
      theory: "視覚的マインドフルネス",
      description:
        "身近なポジティブな対象にアテンションを向け、アンカリングする。",
    },
  },
  {
    id: 82,
    text: "今日これまでにあった『ささやかなラッキー』や良いことは何ですか？",
    depth: "light",
    source: {
      theory: "スリー・グッド・シングス（Three Good Things）",
      description: "良い出来事に意識を向ける思考習慣（ワン・グッド・シング）。",
    },
  },
  {
    id: 83,
    text: "今、身の回りの人で『ありがたいな』とふと思い浮かぶ人は誰ですか？",
    depth: "light",
    source: {
      theory: "感謝（Gratitude）の喚起",
      description: "他者の支えを思い出して心理的安全性と繋がりを感じる。",
    },
  },
  {
    id: 84,
    text: "今、自分がいる空間の温度や空気感は心地よいですか？",
    depth: "light",
    source: {
      theory: "環境認知",
      description: "現時点での身体的安心感を確認する。",
    },
  },
  {
    id: 85,
    text: "今日、誰かの言葉や行動に『ホッとした』瞬間はありましたか？",
    depth: "light",
    source: {
      theory: "社会的一体感 / 共感の認識",
      description: "対人関係から得た安心・安心感の記憶を反芻する。",
    },
  },
  {
    id: 86,
    text: "今、身に着けている服やアクセサリーで落ち着くものはどれですか？",
    depth: "light",
    source: {
      theory: "触覚のセーフティ・オブジェクト",
      description: "身に着けているものの肌触りや質感を安心の拠点とする。",
    },
  },
  {
    id: 87,
    text: "今日一口食べた（飲んだ）もので『美味しかったな』と思うものは何ですか？",
    depth: "light",
    source: {
      theory: "マインドフル・イーティング",
      description: "味覚の喜びを再体験し、日常の充足感を高める。",
    },
  },
  {
    id: 88,
    text: "今、光の差し込み方や風の感じなど、自然を感じるポイントはありますか？",
    depth: "light",
    source: {
      theory: "バイオフィリア（Biophilia）仮説",
      description: "自然要素への認知を通じてストレスホルモンを低減させる。",
    },
  },
  {
    id: 89,
    text: "今、自分の周りにあるもので『当たり前にあるけど役立っている相棒』は何ですか？",
    depth: "light",
    source: {
      theory: "日常的道具への再評価",
      description: "生活を支えるツールへの肯定的な意識を育む。",
    },
  },
  {
    id: 90,
    text: "今日、自分のために働いてくれた道具（PC、靴、ペンなど）を1つ労うなら？",
    depth: "light",
    source: {
      theory: "アニミズム的アプローチ / 感謝の実践",
      description:
        "道具への配慮を通じて、自分の置かれた環境全体への愛着を育む。",
    },
  },
  {
    id: 91,
    text: "今、自分のいる場所で一番『静けさ』や『安心』を感じられるスポットはどこですか？",
    depth: "light",
    source: {
      theory: "心理的セーフ・スペースの確保",
      description: "環境内の安全地帯を特定しておく。",
    },
  },
  {
    id: 92,
    text: "今日、誰かと交わした挨拶や会話の中で、少し温かくなったものはありますか？",
    depth: "light",
    source: {
      theory: "マイクロ・モーメントの共有（Barbara Fredrickson）",
      description: "短時間の温かい交流をポジティブなリソースとして記録する。",
    },
  },
  {
    id: 93,
    text: "今、身の回りにある『色』の中で、一番心が落ち着くものはどれですか？",
    depth: "light",
    source: {
      theory: "視覚的リラクゼーション",
      description: "特定の落ち着く色に焦点を当て、脳の興奮を落ち着かせる。",
    },
  },
  {
    id: 94,
    text: "今日、無事にここまで過ごせたことに一言声をかけるなら？",
    depth: "light",
    source: {
      theory: "生存への肯定（Existential Acceptance）",
      description:
        "特別な成果がなくても、無事に過ごしている事実そのものを肯定する。",
    },
  },
  {
    id: 95,
    text: "今、自分を支えてくれている椅子や床に意識を向けたとき、どう感じますか？",
    depth: "light",
    source: {
      theory: "体感型グラウンディング",
      description: "物理的なサポート感を身体で感じ取り、安心感を得る。",
    },
  },
  {
    id: 96,
    text: "今日、誰かが自分のためにしてくれた『小さな配慮』に気づきましたか？",
    depth: "light",
    source: {
      theory: "感謝の感度（Gratitude Sensitivity）",
      description: "見落としがちな他者からの配慮を捉え直す。",
    },
  },
  {
    id: 97,
    text: "今、窓の外の風景を見たとき、季節の変化を感じるものはありますか？",
    depth: "light",
    source: {
      theory: "時間感覚の拡大",
      description:
        "目の前の課題から一旦離れ、大きな季節のサイクルに意識を移す。",
    },
  },
  {
    id: 98,
    text: "今日、自分の身の回りで『スムーズにうまくいったこと』は何ですか？",
    depth: "light",
    source: {
      theory: "フロー体験（Flow State）の種",
      description: "滞りなく進んだ行動を自覚し、自己の滑らかな動作を認識する。",
    },
  },
  {
    id: 99,
    text: "今、自分の周りにある音の中で『生活の営み』を感じる音は何ですか？",
    depth: "light",
    source: {
      theory: "マインドフル・リスニング",
      description: "音のテクスチャをありのままに捉え、世界との繋がりを感じる。",
    },
  },
  {
    id: 100,
    text: "今、この瞬間に『ここに戻ってこられた』ことに対して一言伝えるなら？",
    depth: "light",
    source: {
      theory: "マインドフル・プレゼンス（今ここへの着地）",
      description: "思考の迷走を止め、今この瞬間の自分に優しく着地する。",
    },
  },
  {
    id: 101,
    text: "今日、一番エネルギーが動いた（高まった・消耗した）瞬間はいつでしたか？",
    depth: "medium",
    source: {
      theory: "経験学習モデル（David Kolb）",
      description: "日々の具体的経験から感情の動きを捉え、内省の起点とする。",
    },
  },
  {
    id: 102,
    text: "今日の中で、想定外だったことや「おっ」と驚いた出来事は何ですか？",
    depth: "medium",
    source: {
      theory: "予測誤差学習（Prediction Error Learning）",
      description:
        "期待と現実のズレに気づくことで、新しい学びや認知のアップデートを促す。",
    },
  },
  {
    id: 103,
    text: "今日の振り返りから、明日以降の自分に活かせる小さな学びは何ですか？",
    depth: "medium",
    source: {
      theory: "アクション・リサーチ（Action Research）",
      description:
        "実践と省察を高速で循環させ、次の行動の質を継続的に改善する。",
    },
  },
  {
    id: 104,
    text: "今日、自分のなかで「うまくいったな」と感じる行動の要因は何でしたか？",
    depth: "medium",
    source: {
      theory: "成功要因の明示化（Success Factor Analysis）",
      description:
        "偶発的な成功を構造化し、再現可能なスキルや知恵に昇華させる。",
    },
  },
  {
    id: 105,
    text: "今日、もし時間を巻き戻せるならやり直したい選択は何ですか？",
    depth: "medium",
    source: {
      theory: "反事実的思考（Counterfactual Thinking）",
      description:
        "別の選択肢をシミュレーションすることで、意思決定の精度を高める。",
    },
  },
  {
    id: 106,
    text: "直近のプロジェクトやタスクで、自分が一番貢献できたと感じる部分はどこですか？",
    depth: "medium",
    source: {
      theory: "ストレングス・ベースド・アプローチ",
      description:
        "自身の強みやバリューが発揮されたポイントを確認し、自己効力感を高める。",
    },
  },
  {
    id: 107,
    text: "今週の自分の行動パターンを振り返って、特徴的だったことは何ですか？",
    depth: "medium",
    source: {
      theory: "行動パターン認識（Behavioral Pattern Recognition）",
      description: "短期的視点から中期的視点へ引き上げ、習慣や偏りに気づく。",
    },
  },
  {
    id: 108,
    text: "今日、直感で動いて正解だったこと、あるいは失敗したことはありますか？",
    depth: "medium",
    source: {
      theory: "直感的判断の検証（Intuition Verification）",
      description:
        "熟練に基づく直感の的中率を振り返り、意思決定の引き出しを増やす。",
    },
  },
  {
    id: 109,
    text: "今日得た新しい情報や気づきの中で、一番印象に残っているものは何ですか？",
    depth: "medium",
    source: {
      theory: "情報の定着化（Information Consolidation）",
      description:
        "インプットされた情報の中から重要な知見を短期記憶から長期記憶へ移行する。",
    },
  },
  {
    id: 110,
    text: "今日、自分のなかで「当たり前」をちょっとだけ疑ってみた瞬間はありましたか？",
    depth: "medium",
    source: {
      theory: "批判的思考（Critical Thinking）",
      description:
        "暗黙の前提に疑問を投げかけ、固定観念から脱却するトレーニングを行う。",
    },
  },
  {
    id: 111,
    text: "今日、想定通りにいかなかったとき、どうやって気持ちを切り替えましたか？",
    depth: "medium",
    source: {
      theory: "コーピング戦略（Coping Strategies）",
      description:
        "ストレスフルな状況に対する自身の対処メカニズムを客観視する。",
    },
  },
  {
    id: 112,
    text: "今日の出来事を映画のワンシーンに例えるなら、どんな場面になりそうですか？",
    depth: "medium",
    source: {
      theory: "ナラティブ・アプローチ（Narrative Approach）",
      description:
        "自分の体験を物語として再構成し、客観的な視点（ディスタンシング）を得る。",
    },
  },
  {
    id: 113,
    text: "最近の自分の行動の中で、「これは続けてよかった」と思える習慣は何ですか？",
    depth: "medium",
    source: {
      theory: "ポジティブ・レインフォースメント（正の強化）",
      description:
        "良好な習慣の継続を自己承認し、行動の定着をさらに強固にする。",
    },
  },
  {
    id: 114,
    text: "最近、避けて通りたかったけれど、向き合って正解だったことはありますか？",
    depth: "medium",
    source: {
      theory: "エクスポージャー（暴露）療法・直面化",
      description:
        "回避傾向に打ち勝った経験を振り返り、心理的レジリエンスを強化する。",
    },
  },
  {
    id: 115,
    text: "今日、自分のなかで最も集中が高まっていた「ゾーン」の時間帯はいつでしたか？",
    depth: "medium",
    source: {
      theory: "フロー理論（Mihaly Csikszentmihalyi）",
      description: "高い没頭感が得られた条件や環境の共通項を探る。",
    },
  },
  {
    id: 116,
    text: "今日、他の人から受け取ったフィードバックや言動で、ハッとしたことは何ですか？",
    depth: "medium",
    source: {
      theory: "ジョハリの窓の拡張（自己と他者の認知のギャップ）",
      description: "他者視点をミラーとして活用し、盲点のエリアを狭める。",
    },
  },
  {
    id: 117,
    text: "今日の自分の判断の中で、一番納得感が高かった決定は何ですか？",
    depth: "medium",
    source: {
      theory: "価値観整合的選択（Value-Aligned Choice）",
      description: "自分のコアバリューと選択が合致していた瞬間を確認する。",
    },
  },
  {
    id: 118,
    text: "最近、自分のなかの「思い込み」が外れた瞬間や、視野が広がった感覚はありましたか？",
    depth: "medium",
    source: {
      theory: "パースペクティブ・テイキング（視点取得）",
      description: "認知の枠組み（フレーム）が拡張されたダイナミクスを捉える。",
    },
  },
  {
    id: 119,
    text: "今日行ったことで、未来の自分のために「種まき」になったことは何ですか？",
    depth: "medium",
    source: {
      theory: "中長期視点の計画行動理論",
      description:
        "目先の成果だけでなく、未来に効く先行投資的な行動を意識化する。",
    },
  },
  {
    id: 120,
    text: "今日、自分のなかの「引き出し」が一つ増えたと感じる出来事はありましたか？",
    depth: "medium",
    source: {
      theory: "スキーマの形成と拡張",
      description:
        "新たな知識や対応方法が自分の認知構造に統合された瞬間を捉える。",
    },
  },
  {
    id: 121,
    text: "最近、同じようなことでモヤモヤしたり躓いたりしていませんか？その共通点は何ですか？",
    depth: "medium",
    source: {
      theory: "反復的認知バイアス・失敗パターンの分析",
      description:
        "無意識に繰り返している思考や行動のループ（悪循環）を断ち切る。",
    },
  },
  {
    id: 122,
    text: "自分のなかに、無意識に発動している「マイルール」や「こだわり」はありますか？",
    depth: "medium",
    source: {
      theory: "不合理な信念（Irrational Beliefs / 認知行動療法）",
      description: "自分を縛っている硬直したルールに気づき、柔軟性を高める。",
    },
  },
  {
    id: 123,
    text: "今日、自分の機嫌が急に良くなったり悪くなったりしたトリガーは何でしたか？",
    depth: "medium",
    source: {
      theory: "感情のトリガー分析",
      description:
        "外的刺激と情緒反応の因果関係を解明し、感情のコントロール力を高める。",
    },
  },
  {
    id: 124,
    text: "最近の自分の思考のクセ（悲観的になりやすい、完璧主義になりすぎる等）に気づく瞬間はありますか？",
    depth: "medium",
    source: {
      theory: "自動思考のキャッチ（Cognitive Distortion）",
      description: "無意識の認知の歪みをメタ認知によって客観的に観測する。",
    },
  },
  {
    id: 125,
    text: "自分が「これをやるとエネルギーを消耗する」という定番のパターンは何ですか？",
    depth: "medium",
    source: {
      theory: "エナジー・ドレイン要因の特定",
      description:
        "エネルギーを奪う状況や人間関係を特定し、事前の防衛策を立てる。",
    },
  },
  {
    id: 126,
    text: "自分が「これがあると調子よく動ける」という自分のトリガー（お気に入り条件）は何ですか？",
    depth: "medium",
    source: {
      theory: "パフォーマンス・アンカリング",
      description: "最高の状態を引き出すための環境的・心理的条件を自覚する。",
    },
  },
  {
    id: 127,
    text: "今日の自分の意思決定を振り返って、何がその判断を左右しましたか？",
    depth: "medium",
    source: {
      theory: "意思決定プロセスの監査",
      description:
        "直感、損得、他者への配慮など、意思決定のウエイトを検証する。",
    },
  },
  {
    id: 128,
    text: "最近、頭の中でグルグルと考えてしまった「終わったこと」は何ですか？",
    depth: "medium",
    source: {
      theory: "反芻思考（Rumination）の特定",
      description:
        "解決しない過去への執着に気づき、注意を現在へリダイレクトする。",
    },
  },
  {
    id: 129,
    text: "自分のなかで「本当はやりたくないのに、引き受けてしまっていること」はありますか？",
    depth: "medium",
    source: {
      theory: "自己一致（Congruence / カール・ロジャーズ）",
      description:
        "内面の欲求と外面の行動の乖離（不一致）に気づき、境界線を見直す。",
    },
  },
  {
    id: 130,
    text: "自分の感情の波が起きやすい「時間帯」や「状況」の傾向はありますか？",
    depth: "medium",
    source: {
      theory: "文脈的メタ認知（Contextual Metacognition）",
      description: "コンディションが低下しやすい環境的リスクを予測・管理する。",
    },
  },
  {
    id: 131,
    text: "今日、自分が「あ、今ちょっと焦ったな」と自覚した瞬間はどこでしたか？",
    depth: "medium",
    source: {
      theory: "アローストレッチ（覚醒度の自己モニタリング）",
      description: "軽いプレッシャーで覚醒が昂った瞬間を早期にキャッチする。",
    },
  },
  {
    id: 132,
    text: "自分のなかの「アクセル」と「ブレーキ」を同時に踏んでいる感覚はどこにありますか？",
    depth: "medium",
    source: {
      theory: "心理的葛藤（Approach-Avoidance Conflict）",
      description:
        "相反する欲求の綱引き構造を客観的に観察し、ジュークを解きほぐす。",
    },
  },
  {
    id: 133,
    text: "最近、他人の言動にイラッとしたとき、自分のどんなツボが押されましたか？",
    depth: "medium",
    source: {
      theory: "投影（Projection）と心理的防衛",
      description:
        "他者への不快感を通じて、自分自身の未解決なテーマや価値観を発見する。",
    },
  },
  {
    id: 134,
    text: "自分の思考が「過去」と「未来」のどちらに引っ張られがちになっていますか？",
    depth: "medium",
    source: {
      theory: "時間的展望（Time Perspective）の偏り",
      description: "後悔（過去）や不安（未来）への過度な意識の傾きを修正する。",
    },
  },
  {
    id: 135,
    text: "今日、自分のなかの「優先順位」は正しく機能していましたか？",
    depth: "medium",
    source: {
      theory: "アイゼンハワー・マトリクス的自己検証",
      description: "緊急度と重要度のバランスが適切だったかを振り返る。",
    },
  },
  {
    id: 136,
    text: "最近、気づかぬうちに溜め込んでいた小さな我慢は何ですか？",
    depth: "medium",
    source: {
      theory: "マイクロ・アグレッションドレインの検知",
      description: "言語化されない日常の小さな不満の蓄積を早期にすくい上げる。",
    },
  },
  {
    id: 137,
    text: "自分の行動を外側から俯瞰したとき、今の自分はどんな風に見えそうですか？",
    depth: "medium",
    source: {
      theory: "客観的自己意識（Objective Self-Awareness）",
      description: "自己像と客観的行動のギャップを調整する。",
    },
  },
  {
    id: 138,
    text: "今日、自分の直感と論理が矛盾した瞬間はありましたか？どちらに従いましたか？",
    depth: "medium",
    source: {
      theory: "二重プロセス理論（System 1 / System 2 の統合）",
      description:
        "直感（システム1）と論理（システム2）のせめぎ合いを検証する。",
    },
  },
  {
    id: 139,
    text: "自分のなかで「これだけは譲れない価値観」が試された場面はありましたか？",
    depth: "medium",
    source: {
      theory: "コア・バリューの検証",
      description:
        "倫理的選択やプレッシャーの中で、自分の核がどう反応したか確かめる。",
    },
  },
  {
    id: 140,
    text: "最近、自分のなかで価値観や興味の向き先が変わってきたと感じる部分はありますか？",
    depth: "medium",
    source: {
      theory: "アイデンティティの移行期（成人発達理論）",
      description: "内発的な関心の変化や成熟のプロセスを捉える。",
    },
  },
  {
    id: 141,
    text: "今日、誰かとのやり取りの中で「すれ違い」や「もどかしさ」を感じた瞬間はありましたか？",
    depth: "medium",
    source: {
      theory: "対人コミュニケーションギャップの分析",
      description: "メッセージの伝達ロスが起きた構造を客観的に見つめ直す。",
    },
  },
  {
    id: 142,
    text: "今日、チームや周囲の人に対して「もっとこうだったら良かったのに」と思ったことは何ですか？",
    depth: "medium",
    source: {
      theory: "他者への期待値の再確認",
      description: "周囲に対する自分の要望や期待の妥当性を振り返る。",
    },
  },
  {
    id: 143,
    text: "最近、誰かの意見や視点に触れて「自分も取り入れたい」と感じたことは何ですか？",
    depth: "medium",
    source: {
      theory: "社会的学習（Social Learning）",
      description: "周囲の優れたロールモデルの行動や視点を積極的に内面化する。",
    },
  },
  {
    id: 144,
    text: "今日、誰かに感謝を伝えたいけれど伝えられなかった言葉はありますか？",
    depth: "medium",
    source: {
      theory: "未完了のコミュニケーション（Unfinished Business）",
      description: "心残りになっている感謝の言葉を再確認し、必要なら表現する。",
    },
  },
  {
    id: 145,
    text: "最近、誰かのサポートに回って「役に立てたな」と感じたエピソードは何ですか？",
    depth: "medium",
    source: {
      theory: "向社会的効用（Prosocial Impact）",
      description: "他者貢献がもたらす自己肯定感と充実感を味わう。",
    },
  },
  {
    id: 146,
    text: "今日、自分の意見を主張するのと、相手の意見を聞くバランスはどうでしたか？",
    depth: "medium",
    source: {
      theory: "自己主張と傾聴のバランス（Assertiveness）",
      description: "自己表現（アサーション）の適切さを振り返る。",
    },
  },
  {
    id: 147,
    text: "最近、苦手なタイプの人や状況に出会ったとき、どんなスタンスで接しましたか？",
    depth: "medium",
    source: {
      theory: "対人適応メカニズム",
      description: "心理的安全性や防衛的態度がどう働いたかを検証する。",
    },
  },
  {
    id: 148,
    text: "今日、誰かの言葉の裏にある「本当の意図や感情」に気づけた瞬間はありましたか？",
    depth: "medium",
    source: {
      theory: "心の理論（Theory of Mind）と共感性",
      description: "他者の視点に立ち、表面的ではない背景のニーズを推察する。",
    },
  },
  {
    id: 149,
    text: "自分のチームやコミュニティの中で、今一番不足していると感じる空気感は何ですか？",
    depth: "medium",
    source: {
      theory: "組織風土の診断（Organizational Climate）",
      description: "集団の心理的安全性やダイナミクスを俯瞰する。",
    },
  },
  {
    id: 150,
    text: "最近、誰かに頼ったりヘルプを求めたりすることに抵抗を感じた場面はありましたか？",
    depth: "medium",
    source: {
      theory: "脆弱性の受容（Vulnerability / ブレネー・ブラウン）",
      description: "助けを求めることへの心理的障壁や過剰な自立心を見つめ直す。",
    },
  },
  {
    id: 151,
    text: "今日、自分の発言が誰かにどんな影響を与えたか想像してみるとどうですか？",
    depth: "medium",
    source: {
      theory: "社会的インパクトの認識",
      description:
        "言葉の持つ影響力を自覚し、責任あるコミュニケーションを意識する。",
    },
  },
  {
    id: 152,
    text: "最近、誰かとの会話の中で「一番心に残った一言」は何でしたか？",
    depth: "medium",
    source: {
      theory: "印象的な言葉のインプリント",
      description: "対話から得た重要なインサイトや感情の揺らぎを固定化する。",
    },
  },
  {
    id: 153,
    text: "チームのメンバーに対して、今一番気にかけてあげたい・サポートしたい人は誰ですか？",
    depth: "medium",
    source: {
      theory: "サーバントリーダーシップの萌芽",
      description: "周囲への利他的な関心を自覚し、関係性の質を主体的に高める。",
    },
  },
  {
    id: 154,
    text: "今日、自分のなかの「正しさ」を相手に押し付けてしまっていませんでしたか？",
    depth: "medium",
    source: {
      theory: "認知の偏狭性（Dogmatism）のチェック",
      description: "多様な視点や価値観の受け入れ度合いを省みる。",
    },
  },
  {
    id: 155,
    text: "最近、オープンに話せなくて心の中に閉じ込めてしまった意見やアイデアはありますか？",
    depth: "medium",
    source: {
      theory: "サイレント・ボイスの自己受容",
      description: "言えなかった本音の正体を明らかにし、適切な表現方法を探る。",
    },
  },
  {
    id: 156,
    text: "今日、誰かと一緒に成し遂げたことや、共有できた小さな喜びは何ですか？",
    depth: "medium",
    source: {
      theory: "共同効力感（Collective Efficacy）",
      description: "チームや他者との協働によるポジティブな成果を確かめる。",
    },
  },
  {
    id: 157,
    text: "自分が周囲の人に与えている影響力（プラスもマイナスも）をどう感じますか？",
    depth: "medium",
    source: {
      theory: "パーソナル・プレゼンスの自覚",
      description: "自身の存在が周囲のエネルギーに与える波及効果を客観視する。",
    },
  },
  {
    id: 158,
    text: "最近、誰かの強みや才能に気づいて「すごいな」とリスペクトした瞬間はありましたか？",
    depth: "medium",
    source: {
      theory: "称賛の心理学（Appreciative Inquiry）",
      description:
        "他者のリソースに対する感度を高め、ポジティブな関係性を築く。",
    },
  },
  {
    id: 159,
    text: "組織や人間関係の中で、自分が今引き受けている役割に満足していますか？",
    depth: "medium",
    source: {
      theory: "ロール・アイデンティティの適合性",
      description:
        "期待されている役割と、自分のやりたいこと・適性の整合性を確かめる。",
    },
  },
  {
    id: 160,
    text: "今日、誰かの笑顔や優しさに救われた、あるいは救いたいと思った瞬間はありましたか？",
    depth: "medium",
    source: {
      theory: "共感の循環（Empathy Loop）",
      description: "人間関係における温かな相互作用の記憶を定着させる。",
    },
  },
  {
    id: 161,
    text: "今日、胸のつかえになっていることや、やり残して引っかかってことは何ですか？",
    depth: "medium",
    source: {
      theory: "ツァイガルニク効果（未完了タスクの認知負荷）",
      description:
        "頭のなかに残り続けている未解決の件をリストアップして外に追い出す。",
    },
  },
  {
    id: 162,
    text: "最近、自分のなかで「言いたいけれど飲み込んでしまった言葉」は何ですか？",
    depth: "medium",
    source: {
      theory: "抑圧された感情の表出化",
      description:
        "飲み込んだ不満や意見のエネルギーを解放し、内面の重圧を軽減する。",
    },
  },
  {
    id: 163,
    text: "今日、自分のなかで処理しきれずに残っている感情のゴミは何ですか？",
    depth: "medium",
    source: {
      theory: "感情のデトックス（Emotional Cleansing）",
      description:
        "その日に発生したネガティブな残余エネルギーを翌日に持ち越さない。",
    },
  },
  {
    id: 164,
    text: "最近、プレッシャーや不安を感じて、つい避けてしまっている課題はありますか？",
    depth: "medium",
    source: {
      theory: "回避行動の認知（Experiential Avoidance）",
      description:
        "不安から目を背けている現実のテーマを特定し、小さな一歩を検討する。",
    },
  },
  {
    id: 165,
    text: "今日、自分のなかの「期待」と「現実」のギャップで少し落ち込んだことはありましたか？",
    depth: "medium",
    source: {
      theory: "期待値管理の不整合（Disconfirmation Theory）",
      description: "過度な期待が引き起こしたギャップの構造をフラットに捉える。",
    },
  },
  {
    id: 166,
    text: "心の奥底で「本当はもっとこうしたい」と叫んでいる本音は何ですか？",
    depth: "medium",
    source: {
      theory: "真の自己（True Self / ドナルド・ウィニコット）",
      description:
        "社会的ペルソナの下に隠された、生々しい個人的欲求にアクセスする。",
    },
  },
  {
    id: 167,
    text: "最近、過去の失敗や後悔の記憶がふと頭をよぎった瞬間はありましたか？",
    depth: "medium",
    source: {
      theory: "過去の認知再構成（Cognitive Rebuttal）",
      description: "過去のトラウマや失敗に対する現在の解釈をアップデートする。",
    },
  },
  {
    id: 168,
    text: "今日、誰かに気を使いすぎて自分のエネルギーが削られた場面はありましたか？",
    depth: "medium",
    source: {
      theory: "過剰適応（Hyper-adaptation）の自覚",
      description:
        "他者配慮のしすぎによるエネルギー消耗を検知し、自愛に切り替える。",
    },
  },
  {
    id: 169,
    text: "自分のなかで「いつか片付けなきゃ」と先送りし続けているメンタルの負債は何ですか？",
    depth: "medium",
    source: {
      theory: "心理的負債の棚卸し（Psychological Debt）",
      description:
        "放置されている未解決の問題が精神に与えている負荷を評価する。",
    },
  },
  {
    id: 170,
    text: "今日、ちょっとしたプライドや見栄が邪魔をして素直になれなかったことはありましたか？",
    depth: "medium",
    source: {
      theory: "エゴの防衛機制（Ego Defense Mechanisms）",
      description:
        "プライドを守ろうとする防衛反応に自ら気づき、素直さを取り戻す。",
    },
  },
  {
    id: 171,
    text: "最近、自分の限界を超えて頑張りすぎていたサインはありましたか？",
    depth: "medium",
    source: {
      theory: "バーンアウト（燃え尽き）予防シグナル",
      description: "心身が発していた過負荷の警告サインを振り返る。",
    },
  },
  {
    id: 172,
    text: "今日、自分の感情をコントロールしようとして、逆に疲れてしまったことはありますか？",
    depth: "medium",
    source: {
      theory: "感情の過剰抑制（Suppression Fatigue）",
      description:
        "無理に感情を抑え込むことのコストに気づき、自然な受容を試みる。",
    },
  },
  {
    id: 173,
    text: "最近、自分のなかで「許せないこと」や「許容できないライン」が変わりましたか？",
    depth: "medium",
    source: {
      theory: "境界線（バウンダリー）のシフト",
      description:
        "自分の中の許容閾値の変化を通じて、価値観の移行期を把握する。",
    },
  },
  {
    id: 174,
    text: "今日、心の奥のほうで感じていた孤独感や心細さはどんなものでしたか？",
    depth: "medium",
    source: {
      theory: "存在論的安全性の揺らぎ",
      description: "人間が抱える普遍的な孤独感を否定せず、優しく包み込む。",
    },
  },
  {
    id: 175,
    text: "自分のなかで「これ以上背負えない」と感じる荷物は何ですか？",
    depth: "medium",
    source: {
      theory: "認知負荷・責任のオーバーロード",
      description: "過剰に背負い込んでいる役割やプレッシャーを明確にする。",
    },
  },
  {
    id: 176,
    text: "最近、自分の感情にフタをして「大丈夫」と言い聞かせた瞬間はありましたか？",
    depth: "medium",
    source: {
      theory: "感情の封印（Emotional Shielding）",
      description: "一時的にやり過ごした本音を安全な空間で掘り起こしてあげる。",
    },
  },
  {
    id: 177,
    text: "今日、不意に湧き上がってきた怒りや嫉妬のエネルギーの出どころはどこですか？",
    depth: "medium",
    source: {
      theory: "シャドウ（影 / ユング心理学）の統合",
      description:
        "否定しがちなダークな感情の中に眠る、自分の本当の欲求を見つける。",
    },
  },
  {
    id: 178,
    text: "心のなかで「もう手放してもいいのに、握りしめている過去のこだわり」は何ですか？",
    depth: "medium",
    source: {
      theory: "執着の手放し（Letting Go）",
      description:
        "成果や過去の成功体験、あるいは古いアイデンティティを手放す準備をする。",
    },
  },
  {
    id: 179,
    text: "今日、自分のコンディション不良の本当の原因（根本的な要因）は何でしたか？",
    depth: "medium",
    source: {
      theory: "根本原因分析（Root Cause Analysis）",
      description:
        "表面的な不調の裏にある、睡眠不足や人間関係などの真因を特定する。",
    },
  },
  {
    id: 180,
    text: "今日一日を終えて、自分の心と体に「本当にお疲れ様」と声を大にして言えますか？",
    depth: "medium",
    source: {
      theory: "セルフ・コンパッションの統合",
      description:
        "一日の終わりに自分全肯定の儀式を行い、受容のなかで眠りにつく。",
    },
  },
  {
    id: 181,
    text: "今日一日の経験を踏まえて、明日最初にやりたい・変えたいことは何ですか？",
    depth: "medium",
    source: {
      theory: "フィードバック・ループの完結",
      description: "一日の学びを翌日の具体的な行動変容へ直結させる。",
    },
  },
  {
    id: 182,
    text: "今日見つけた自分の「武器」や「強み」を、明日どう活かしますか？",
    depth: "medium",
    source: {
      theory: "ストレングス・トランスファー",
      description:
        "発見した強みを翌日のシチュエーションに適用する計画を立てる。",
    },
  },
  {
    id: 183,
    text: "明日、今日よりも少しだけラクに、ご機嫌に過ごすための工夫は何ですか？",
    depth: "medium",
    source: {
      theory: "プロアクティブ・コーピング（予防的対処）",
      description:
        "明日のストレスを事前に予測し、回避・緩和のための仕掛けを用意する。",
    },
  },
  {
    id: 184,
    text: "今日うまくいかなかったことを、明日はどういうアプローチで試しますか？",
    depth: "medium",
    source: {
      theory: "アジャイル・イテレーション（素早い改善）",
      description:
        "失敗を「失敗」ではなく「テスト結果」と捉えて次の仮説を立てる。",
    },
  },
  {
    id: 185,
    text: "次に同じような壁にぶつかったとき、自分は最初に何をするべきですか？",
    depth: "medium",
    source: {
      theory: "メタ・プロトコル（手順の一般化）",
      description:
        "成功・失敗パターンから、汎用的な対処プロトコル（型）を抽出する。",
    },
  },
  {
    id: 186,
    text: "今日得た知見や気づきを、誰かにシェアするとしたらどんな言葉にしますか？",
    depth: "medium",
    source: {
      theory: "ファインマン・テクニック（教えることによる定着）",
      description:
        "得た学びを他者に伝わる形に言語化し、自分の知識として完全に定着させる。",
    },
  },
  {
    id: 187,
    text: "明日、自分のエネルギーを集中させる「最重要の1点」は何にしますか？",
    depth: "medium",
    source: {
      theory: "ワン・シング原理（The One Thing）",
      description: "複数のタスクから本質的な1点を選び、認知の分散を防ぐ。",
    },
  },
  {
    id: 188,
    text: "今日を乗り越えた自分に、明日プレゼントできる小さな楽しみは何ですか？",
    depth: "medium",
    source: {
      theory: "プロスペクト・リワード（期待報酬の設定）",
      description:
        "未来の報酬を設定することで、行動へのモチベーションをデザインする。",
    },
  },
  {
    id: 189,
    text: "今後のために、自分のスケジュールやタスクから「削るべきもの」は何ですか？",
    depth: "medium",
    source: {
      theory: "エッセンシャル思考（Essentialism）",
      description:
        "より重要で本質的なことに集中するため、引き算の意思決定を行う。",
    },
  },
  {
    id: 190,
    text: "今日、一歩前に進めたことで、見えてきた新しい景色や可能性は何ですか？",
    depth: "medium",
    source: {
      theory: "プログレス原則（進捗の力）",
      description: "小さな前進が生み出すポジティブな視界の広がりを自覚する。",
    },
  },
  {
    id: 191,
    text: "明日、周囲の人と関わる上で意識したい自分のスタンスは何ですか？",
    depth: "medium",
    source: {
      theory: "対人インテンション（社会的意図の設定）",
      description: "他者とどのように関わるかを事前にマインドセットする。",
    },
  },
  {
    id: 192,
    text: "今日完了できなかったタスクを、次にどう仕切り直しますか？",
    depth: "medium",
    source: {
      theory: "タスク・リプランニング",
      description:
        "未了のプレッシャーをリセットし、現実的なリスケジュールを行う。",
    },
  },
  {
    id: 193,
    text: "明日、自分を心地よくスタートさせるための「前夜の仕込み」は何ができますか？",
    depth: "medium",
    source: {
      theory: "プレ・コミットメント（意思決定の省力化）",
      description: "明日の自分が迷わないための環境設計を寝る前に行う。",
    },
  },
  {
    id: 194,
    text: "今日気づいた自分の悪癖や課題に対して、明日から試せる小さな実験は何ですか？",
    depth: "medium",
    source: {
      theory: "行動実験（Behavioral Experiment / 認知行動療法）",
      description:
        "「もしこう変えたらどうなるか」という仮説検証を日常的小実験として行う。",
    },
  },
  {
    id: 195,
    text: "これからの数日間で、自分のキャパシティを守るために張るべき「境界線」はどこですか？",
    depth: "medium",
    source: {
      theory: "心理的バウンダリーの強化",
      description: "過度な要求や刺激から身を守るためのガードラインを定める。",
    },
  },
  {
    id: 196,
    text: "今日、新しく芽生えた好奇心や「もっと知りたいこと」は何ですか？",
    depth: "medium",
    source: {
      theory: "好奇心の持続（Curiosity Drive）",
      description:
        "内発的な探求心の芽を摘まず、知的好奇心の方向性をキャッチする。",
    },
  },
  {
    id: 197,
    text: "明日、自分に対して一番期待したいこと、あるいは優しくしたいポイントは何ですか？",
    depth: "medium",
    source: {
      theory: "セルフ・リーダーシップ",
      description:
        "自分自身の最高の内なるコーチとなり、健全なエンパワーメントを行う。",
    },
  },
  {
    id: 198,
    text: "今日得た「失敗のデータ」を、未来の成功のためにどう翻訳しますか？",
    depth: "medium",
    source: {
      theory: "リフレーミング（Reframing）",
      description: "ネガティブな事実を、価値ある学習データとして再定義する。",
    },
  },
  {
    id: 199,
    text: "次のステップに進むために、今の自分が心に留めておくべきマントラ（合言葉）は何ですか？",
    depth: "medium",
    source: {
      theory: "内省の要約・アンカリング",
      description: "長文の内省をひとつの短い言葉やフレーズに凝縮し、心に刻む。",
    },
  },
  {
    id: 200,
    text: "今日一日のすべての経験にタイトルをつけるとしたら、何という名前にしますか？",
    depth: "medium",
    source: {
      theory: "体験の統合と意味づけ（Sensemaking）",
      description:
        "一日の多様な出来事を一つのストーリーとして統合し、内省を締めくくる。",
    },
  },
  {
    id: 201,
    text: "もし『絶対に失敗しない』としたら、本当はどんなことに挑戦したいですか？",
    depth: "deep",
    source: {
      theory: "変容的学習理論（Jack Mezirow）",
      description:
        "失敗への恐れという制約を取り払い、潜在的な願望や真の関心を浮き彫りにする。",
    },
  },
  {
    id: 202,
    text: "最近、自分が『当たり前』だと思い込んでいたけれど、実は手放したほうがいい前提は何ですか？",
    depth: "deep",
    source: {
      theory: "前提の省察（Premise Reflection）",
      description:
        "無意識に思考や行動を制約している根深いパラダイムに疑問を投げかける。",
    },
  },
  {
    id: 203,
    text: "今の自分の選択は、『こうしたい』という内発的動機と『こうすべき』という外圧のどちらに基づいていますか？",
    depth: "deep",
    source: {
      theory: "自己決定理論（Deci & Ryan）",
      description:
        "自律性の度合いを測定し、他者主導の規範から自己決定による選択へ転換を図る。",
    },
  },
  {
    id: 204,
    text: "今の自分の生き方や働き方を、10年後の自分が見たら何と声をかけると思いますか？",
    depth: "deep",
    source: {
      theory: "時間的ディスタンシング（Temporal Distancing）",
      description:
        "長期的な時間軸から現在を客観視し、真に重要な意思決定を見定める。",
    },
  },
  {
    id: 205,
    text: "『自分が我慢すれば丸く収まる』と考えて、後回しにし続けている本音は何ですか？",
    depth: "deep",
    source: {
      theory: "過剰適応の解除",
      description:
        "自己犠牲的な調整行動を認識し、本来のニーズの優先度を引き上げる。",
    },
  },
  {
    id: 206,
    text: "自分の中にある『弱さ』や『認めたくない欠点』を、隠さずに言葉にするなら何ですか？",
    depth: "deep",
    source: {
      theory: "脆弱性の開示（Brené Brown）",
      description:
        "自らの弱さを受け入れることで、偽りのない自己一致と心理的レジリエンスを獲得する。",
    },
  },
  {
    id: 207,
    text: "周囲の期待に答えようとするあまり、失われつつある『自分らしさ』は何ですか？",
    depth: "deep",
    source: {
      theory: "真の自己と偽りの自己（Donald Winnicott）",
      description:
        "社会的役割を果たすために適応したペルソナと、個性の核との乖離を特定する。",
    },
  },
  {
    id: 208,
    text: "自分の人生において、繰り返し現れる『葛藤のテーマ』や『課題』は何ですか？",
    depth: "deep",
    source: {
      theory: "成人発達理論（Robert Kegan）",
      description:
        "自身の認知構造（意味形成メカニズム）の段階的変化と限界を自覚する。",
    },
  },
  {
    id: 209,
    text: "『これがないと自分価値がない』としがみついている肩書や実績、人間関係はありますか？",
    depth: "deep",
    source: {
      theory: "脱同一化（Disidentification）",
      description:
        "外部の評価指標と自己価値を切り離し、内体的な自律性を高める。",
    },
  },
  {
    id: 210,
    text: "人生の最後に『これだけは成し遂げた・大切にした』と納得したいことは何ですか？",
    depth: "deep",
    source: {
      theory: "存在論的リフレクション（Existential Reflection）",
      description:
        "死生観や限界状況の意識を通じて、有限な時間における最優先事項を再定義する。",
    },
  },
  {
    id: 211,
    text: "今抱えている問題の中で、実は『自分が変わることを避けるために維持している』側面はありますか？",
    depth: "deep",
    source: {
      theory: "免疫機能としての変化抵抗（Immunity to Change）",
      description:
        "表向きの目標を阻害している裏の裏にある「隠れた固定目標」を暴露する。",
    },
  },
  {
    id: 212,
    text: "今の自分の生き方は、子どもの頃に描いていた『なりたい大人』の姿とどう響き合っていますか？",
    depth: "deep",
    source: {
      theory: "ナラティブ・アイデンティティ（Dan McAdams）",
      description:
        "過去のライフストーリーと現在の生き方の連続性を検証し、統合感を深める。",
    },
  },
  {
    id: 213,
    text: "自分の人生の中で、もっとも大きな『転機』となった選択は何で、そこから何を学びましたか？",
    depth: "deep",
    source: {
      theory: "意味生成理論（Sensemaking）",
      description:
        "過去の決定的な出来事を再解釈し、現在の価値観の根拠として意味づける。",
    },
  },
  {
    id: 214,
    text: "もし他人の目や世間の評価を100%気にしなくていいなら、明日から何を変えますか？",
    depth: "deep",
    source: {
      theory: "評価懸念の排除（Social Desirability Bias Removal）",
      description: "社会的望ましさのバイアスを排除し、純粋な願望を捉える。",
    },
  },
  {
    id: 215,
    text: "自分が『絶対に受け入れられない』と感じる他人の行動や価値観の裏にある、自分の信念は何ですか？",
    depth: "deep",
    source: {
      theory: "シャドウの投影（Carl Jung）",
      description:
        "抑圧された不快感から、自分自身が強く縛られている暗黙の倫理規範を炙り出す。",
    },
  },
  {
    id: 216,
    text: "これまで経験した中で最も深い『挫折』や『痛み』は、今の自分にどんな贈り物を残しましたか？",
    depth: "deep",
    source: {
      theory: "PTG（外傷後成長：Post-Traumatic Growth）",
      description:
        "逆境や精神的苦痛を乗り越えたプロセスを再肯定し、新たな意味を見出す。",
    },
  },
  {
    id: 217,
    text: "自分が最もエネルギーと情熱を注げる対象（テーマ）は、どんな個人的体験から生まれていますか？",
    depth: "deep",
    source: {
      theory: "原体験の探求（Core Experience）",
      description:
        "情熱やキャリアの源泉となる過去の強烈な体験・原体験を掘り起こす。",
    },
  },
  {
    id: 218,
    text: "今の仕事や生き方は、自分が大切にしたい『美学』や『倫理観』と一致していますか？",
    depth: "deep",
    source: {
      theory: "コア・リフレクション（Fred Korthagen）",
      description:
        "行動・能力・信念の層を超えて、アイデンティティや使命（コア）の層と照合する。",
    },
  },
  {
    id: 219,
    text: "自分が何かを決断するとき、無意識に恐れている『最悪のシナリオ』は何ですか？",
    depth: "deep",
    source: {
      theory: "破局的思考の直面化（Catastrophizing Analysis）",
      description:
        "破局化された恐れの正体を明確化し、現実的なリスクと心理的障壁を分離する。",
    },
  },
  {
    id: 220,
    text: "これまでの人生で『決別して良かったもの』と『未だに引きずっているもの』は何ですか？",
    depth: "deep",
    source: {
      theory: "境界設定と分断のプロセス",
      description: "自律的な歩みを阻む依存や未完了の過去の清算度合いを測る。",
    },
  },
  {
    id: 221,
    text: "今の自分の『本気度』を100点満点とすると何点で、何が満点を阻んでいますか？",
    depth: "deep",
    source: {
      theory: "コミットメントの自己査定",
      description:
        "目標や取り組みに対する全心全身のコミットメント度合と阻害要因を解明する。",
    },
  },
  {
    id: 222,
    text: "自分の人生において、お金や時間に関係なく『守り抜きたいもの』は何ですか？",
    depth: "deep",
    source: {
      theory: "絶対的価値観（Ultimate Values）",
      description: "損得勘定を超えた、人生の絶対的優先領域を明確化する。",
    },
  },
  {
    id: 223,
    text: "自分を突き動かすエネルギーの源泉は『怒り・危機感』と『憧れ・喜び』のどちらが大きいですか？",
    depth: "deep",
    source: {
      theory: "ペイン＆プレジャー・モチベーション",
      description:
        "自分の行動を駆動する根本的なドライバー（負のエネルギーか正のエネルギーか）を知る。",
    },
  },
  {
    id: 224,
    text: "『自分が本当に求めているもの』と『他人が羨むもの』を混同していませんか？",
    depth: "deep",
    source: {
      theory: "欲望の模倣理論（René Girard）",
      description:
        "他者の目を介した二次的欲求ではなく、内発的で純粋な欲求を区別する。",
    },
  },
  {
    id: 225,
    text: "もし自分の生き方を一冊の本にするなら、今の章にはどんなタイトルをつけますか？",
    depth: "deep",
    source: {
      theory: "ライフ・ストーリー理論",
      description:
        "現在の困難や停滞を「物語の途中の必要な章」として位置づけ直す。",
    },
  },
  {
    id: 226,
    text: "今の自分は『誰の人生』を生きていますか？親や上司、世間の期待になっていませんか？",
    depth: "deep",
    source: {
      theory: "分離個体化理論（Separation-Individuation）",
      description:
        "重要な他者からの精神的自立と、自己所有感（Sense of Ownership）を確かめる。",
    },
  },
  {
    id: 227,
    text: "自分が『満たされない』と感じるとき、本当に欠けているものは何ですか？",
    depth: "deep",
    source: {
      theory: "欲求段階説 / 根底にあるニーズの特定",
      description:
        "表層的な不満の根底にある心理的欲求（承認、親密さ、自己実現など）を突きとめる。",
    },
  },
  {
    id: 228,
    text: "自分が人生で一番『自分に嘘をついた』瞬間はいつで、なぜそうせざるを得ませんでしたか？",
    depth: "deep",
    source: {
      theory: "自己不一致の修正",
      description:
        "過去の不誠実さを自責ではなく受容的に見つめ直し、自己への信頼を回復する。",
    },
  },
  {
    id: 229,
    text: "自分が与える側（ギバー）であるとき、それは自分の豊かさから出ていますか、それとも承認欲求ですか？",
    depth: "deep",
    source: {
      theory: "Give & Take 理論 / 健全なギバー",
      description:
        "他者貢献の背後にある隠れたニーズ（嫌われたくない、認められたい）を点検する。",
    },
  },
  {
    id: 230,
    text: "『これのためなら傷ついても後悔しない』と思えるテーマや存在はありますか？",
    depth: "deep",
    source: {
      theory: "意義深さ（Meaningfulness）の発見",
      description: "苦痛を甘受してでも追及したい真の目的意識を明らかにする。",
    },
  },
  {
    id: 231,
    text: "自分が最も嫉妬を感じる相手は誰で、その嫉妬は自分のどんな未開発の可能性を示していますか？",
    depth: "deep",
    source: {
      theory: "嫉妬のシャドウ分析",
      description:
        "嫉妬を「自分が本当は手に入れたい欲望のシグナル」としてポジティブに読み替える。",
    },
  },
  {
    id: 232,
    text: "今の生活の中で、自分の魂や心が『枯渇している』と感じる部分はどこですか？",
    depth: "deep",
    source: {
      theory: "スピリチュアル・ウェルビーイング",
      description:
        "単なる肉体疲労を超えた、精神的・情動的な飢餓感に耳を傾ける。",
    },
  },
  {
    id: 233,
    text: "自分の強みや才能を、社会や他者のためにどう役立てたいと考えていますか？",
    depth: "deep",
    source: {
      theory: "ジェネラティビティ（Generativity / Erikson）",
      description:
        "自己完結を超えて、次世代や周囲へ還元・継承する意思を確認する。",
    },
  },
  {
    id: 234,
    text: "自分の人生に『一貫して流れている軸（テーマ）』を言葉で表すと何ですか？",
    depth: "deep",
    source: {
      theory: "キャリア・アンカー（Edgar Schein）",
      description:
        "ブレずに持ち続けている動機やコンピテンシー、価値観の核（アンカー）を特定する。",
    },
  },
  {
    id: 235,
    text: "自分が一番『自分を許せていない』過去の出来事は何で、どうすれば手放せますか？",
    depth: "deep",
    source: {
      theory: "セルフ・フォーギブネス（自己寛恕）",
      description:
        "過去の自責の念を手放し、不完全な自分を許すプロセスの起点とする。",
    },
  },
  {
    id: 236,
    text: "『成功』の定義を自分の言葉で書き直すとしたら、どんな条件になりますか？",
    depth: "deep",
    source: {
      theory: "主観的キャリア成功基準の再構築",
      description:
        "他者の定義した社会的成功モデルから離脱し、独自の成功基準を築く。",
    },
  },
  {
    id: 237,
    text: "今の自分は、人生の『探求者』『守護者』『創造者』のどのモードにいますか？",
    depth: "deep",
    source: {
      theory: "アーキタイプ（原型）心理学",
      description: "現在のライフステージで演じている基本的役割の意識化を行う。",
    },
  },
  {
    id: 238,
    text: "自分が感じる『孤独』や『孤立感』の根っこには、どんな心理的壁がありますか？",
    depth: "deep",
    source: {
      theory: "親密性の回避（Intimacy Avoidance）",
      description:
        "傷つくことを恐れて他者と適切な距離を保とうとする防衛機制を見破る。",
    },
  },
  {
    id: 239,
    text: "自分の人生で『もっと早く気づけばよかった』と思う最も大切な真理は何ですか？",
    depth: "deep",
    source: {
      theory: "ライフ・レフレクション / 智恵の統合",
      description: "実体験を通じて得た教訓を自分の生き方の原則として抽出する。",
    },
  },
  {
    id: 240,
    text: "今のあなたを一番邪魔している『内なる批判者（インナー・クリティック）』の口癖は何ですか？",
    depth: "deep",
    source: {
      theory: "インナー・クリティックの擬人化と客観化",
      description:
        "自分を攻撃する内なる声を別個の存在として切り離し、コントロールを取り戻す。",
    },
  },
  {
    id: 241,
    text: "『あの人のようには絶対になりたくない』と思う相手の中に、見たくない自分の姿はありませんか？",
    depth: "deep",
    source: {
      theory: "鏡の法則 / 投影の引き戻し",
      description:
        "他者への嫌悪感の中に潜む、自分自身が抑圧している側面（シャドウ）を統合する。",
    },
  },
  {
    id: 242,
    text: "過去の人間関係で壊れてしまった絆の中で、今でも修復したい、あるいは完了させたいものは？",
    depth: "deep",
    source: {
      theory: "関係性の未完了（Unfinished Relationship）",
      description:
        "わだかまりが残る対人関係に区切りをつけるか、向き合う意図を明確にする。",
    },
  },
  {
    id: 243,
    text: "自分が『安全地帯（コンフォートゾーン）』に留まり続けるために使っている言い訳は何ですか？",
    depth: "deep",
    source: {
      theory: "コンフォートゾーンの突破",
      description: "変化に伴う不安から逃れるための正当化ロジックを見破る。",
    },
  },
  {
    id: 244,
    text: "自分が怒りを感じるとき、その感情の裏に隠れている『悲しみ』や『寂しさ』は何ですか？",
    depth: "deep",
    source: {
      theory: "一次感情と二次感情の分離",
      description:
        "二次感情（怒り）の下にある一次感情（傷つき、寂しさ）にアクセスし、本質的なケアを行う。",
    },
  },
  {
    id: 245,
    text: "自分が本当に欲しい『承認』や『愛』を、自分自身に与えられていない原因は何ですか？",
    depth: "deep",
    source: {
      theory: "インナーチャイルドの癒やし",
      description:
        "幼少期からの無条件の承認の不足を、成熟した自分自身で補うプロセスの探求。",
    },
  },
  {
    id: 246,
    text: "自分が『無価値だ』と感じそうになるのを防ぐために、過剰にやっている行動は何ですか？",
    depth: "deep",
    source: {
      theory: "補償行動（Compensation）",
      description:
        "無価値感という恐怖を埋めるためのオーバーワークや過剰な他者配慮を特定する。",
    },
  },
  {
    id: 247,
    text: "自分の中にある『コントロール欲求』は、どんな不安から生まれていますか？",
    depth: "deep",
    source: {
      theory: "不確実性耐性（Uncertainty Tolerance）",
      description:
        "物事をコントロールしたい執着の裏にある、不確実性への恐れを認める。",
    },
  },
  {
    id: 248,
    text: "自分が自分に対して『条件付きの愛』しか与えていないポイントはどこですか？",
    depth: "deep",
    source: {
      theory: "無条件の肯定（Unconditional Positive Regard）",
      description:
        "「成果を出した自分」しか愛せない条件付きの自己受容をゆるめる。",
    },
  },
  {
    id: 249,
    text: "これまで『損をした』『奪われた』と思っている経験から、得られた強さは何ですか？",
    depth: "deep",
    source: {
      theory: "被害者意識（Victimhood）からの脱却",
      description:
        "「受け身の被害者」の立場を卒業し、状況を生き抜いた「サバイバー」としての力を自覚する。",
    },
  },
  {
    id: 250,
    text: "自分の人生に制限をかけている『呪いのような言葉（他者からの刷り込み）』は何ですか？",
    depth: "deep",
    source: {
      theory: "スクリプト分析（交流分析 / 心理脚本）",
      description:
        "親や指導者から無意識に植え付けられた人生脚本（呪縛）を脱構築する。",
    },
  },
  {
    id: 251,
    text: "自分が最も『感情的になりやすいテーマ』は何で、どのような傷が疼いていますか？",
    depth: "deep",
    source: {
      theory: "トラウマ・ボタンの特定",
      description:
        "過剰反応を引き起こす心理的傷跡（トリガー）を自覚し、客観化する。",
    },
  },
  {
    id: 252,
    text: "自分の中の『子どもっぽい部分』や『わがまま』を、どれくらい許容できていますか？",
    depth: "deep",
    source: {
      theory: "チャイルド（C）の統合（交流分析）",
      description:
        "抑圧された自由な感情や童心を健全な形で表現することを認める。",
    },
  },
  {
    id: 253,
    text: "『信じて裏切られること』への恐れから、深められていない関係性はありますか？",
    depth: "deep",
    source: {
      theory: "対人不信の解除",
      description: "傷つくリスクを冒してでも親密さを深める覚悟を点検する。",
    },
  },
  {
    id: 254,
    text: "自分の努力や頑張りが『報われない』と感じたとき、どんな感情で満たされますか？",
    depth: "deep",
    source: {
      theory: "報いへの執着と手放し",
      description:
        "成果や見返りを求めるエゴと、プロセスそのものへの充足感を区別する。",
    },
  },
  {
    id: 255,
    text: "『悲しむこと』や『泣くこと』を自分に禁じていませんか？最後に素直に泣いたのはいつですか？",
    depth: "deep",
    source: {
      theory: "グリーフケア（哀悼のプロセス）",
      description: "喪失や痛みを悲しむプロセスを許可し、感情の滞りを流す。",
    },
  },
  {
    id: 256,
    text: "自分が『自分を誇らしい』と心から思えた最後の瞬間は、何をしていたときですか？",
    depth: "deep",
    source: {
      theory: "自己誇揚（Self-Enhancement）の記憶",
      description:
        "自己の尊厳が満たされたエピソードを再確認し、アイデンティティの柱とする。",
    },
  },
  {
    id: 257,
    text: "自分の中に『罪悪感』を植え付けている出来事や関係性は何ですか？",
    depth: "deep",
    source: {
      theory: "不健康な罪悪感の解除",
      description:
        "他者の感情の責任まで背負い込んでいる不必要な罪悪感を特定して手放す。",
    },
  },
  {
    id: 258,
    text: "自分の人生の『シナリオの結末』を、自分は無意識にハッピーエンドとバッドエンドのどちらと考えていますか？",
    depth: "deep",
    source: {
      theory: "予言の自己成就（Self-Fulfilling Prophecy）",
      description:
        "自分の人生に対する根本的な楽観/悲観の前提を見直し、書き換える。",
    },
  },
  {
    id: 259,
    text: "自分が『自分の味方』であり続けるために、今日から辞めるべき自己批判は何ですか？",
    depth: "deep",
    source: {
      theory: "セルフ・アライシップ（自己同盟）",
      description:
        "自分を罰する暴君から、自分を守り支える最強の味方へと態度を改める。",
    },
  },
  {
    id: 260,
    text: "もし『すべての痛みが学びのためにあった』としたら、今の経験は何を教えていますか？",
    depth: "deep",
    source: {
      theory: "リフレーミングと意味付け",
      description:
        "現在進行形の苦痛や試練に対して、成長のための建設的な意味を与える。",
    },
  },
  {
    id: 261,
    text: "人生の次のフェーズに進むために、今まさに捨て去るべき『古い自分』は何ですか？",
    depth: "deep",
    source: {
      theory: "リミナル・スペース（境界空間）からの脱出",
      description:
        "移行期において、役割やアイデンティティの脱ぎ捨てを意識的に選択する。",
    },
  },
  {
    id: 262,
    text: "明日から『本来の自分』として生きるために、一歩を踏み出すべき決断は何ですか？",
    depth: "deep",
    source: {
      theory: "実存的決断（Existential Choice）",
      description:
        "自分の人生の全責任を引き受け、真実の自分に従った行動を起こす。",
    },
  },
  {
    id: 263,
    text: "自分のエネルギーを最も低下させている環境や関係から離れる覚悟はありますか？",
    depth: "deep",
    source: {
      theory: "バウンダリーの断行",
      description:
        "毒性の高い環境から撤退し、自らのウェルビーイングを守る勇気を持つ。",
    },
  },
  {
    id: 264,
    text: "自分が『本気で取り組む』ことを阻んでいる一番の恐れは何で、どう乗り越えますか？",
    depth: "deep",
    source: {
      theory: "恐れに向き合う勇気（Courage Under Fear）",
      description: "恐れが存在したまま行動を起こす「勇気」の概念を適用する。",
    },
  },
  {
    id: 265,
    text: "自分の大切な人に『自分が生きて見せたい後ろ姿』はどんな生き方ですか？",
    depth: "deep",
    source: {
      theory: "モデリングと影響力",
      description:
        "他者に求める模範を、まずは自らの生き方によって体現する決意を固める。",
    },
  },
  {
    id: 266,
    text: "自分の人生の舵（ステアリング）を、他人に渡してしまっていませんか？",
    depth: "deep",
    source: {
      theory: "統制の所在地（Locus of Control）の内在化",
      description:
        "自分の人生の主導権を他者や環境から自分自身の手元へと取り戻す。",
    },
  },
  {
    id: 267,
    text: "自分の夢や理想を語るとき、どこか『自分には無理だ』と諦めている理由は？",
    depth: "deep",
    source: {
      theory: "学習性無力感の解消",
      description: "過去の失敗体験が作り出した学習性の限界意識を打ち破る。",
    },
  },
  {
    id: 268,
    text: "『完璧になってから始める』のをやめて、不完全なまま踏み出すべき第一歩は？",
    depth: "deep",
    source: {
      theory: "脱・完璧主義（Progress Over Perfection）",
      description:
        "未完成のまま行動を起こすことで、フィードバックによる学習を開始する。",
    },
  },
  {
    id: 269,
    text: "もし自分の命が『あと1年』だとしたら、現在の優先順位をどう組み替えますか？",
    depth: "deep",
    source: {
      theory: "死の認識（Memento Mori）",
      description:
        "人生の有限性を強く自覚し、日常の瑣末な悩みから真に重要な行動へシフトする。",
    },
  },
  {
    id: 270,
    text: "自分が『本当にやりたいこと』に対して、どれくらいリソース（時間・お金）を投資していますか？",
    depth: "deep",
    source: {
      theory: "アロケーション（資源配分）の不整合",
      description:
        "価値観と言行不一致（時間やお金の実際の使い方の乖離）を正す。",
    },
  },
  {
    id: 271,
    text: "自分が変化しようとしたとき、足を引っ張ろうとする周囲の反応にどう対処しますか？",
    depth: "deep",
    source: {
      theory: "系統的抵抗への対抗（Crab Mentality）",
      description:
        "周囲のホメオスタシス（恒常性維持機能）に屈せず、変革を貫く軸を保つ。",
    },
  },
  {
    id: 272,
    text: "『自分が変わる』ことによって失うもの（慣れ親しんだ快適さや人間関係）を受け入れられますか？",
    depth: "deep",
    source: {
      theory: "変化に伴うトレードオフの受容",
      description:
        "前進には必ず何らかの手放しが伴うことを自覚し、その代償を受け入れる。",
    },
  },
  {
    id: 273,
    text: "自分の可能性を100%解き放つのを妨げている『内なる制約』は何ですか？",
    depth: "deep",
    source: {
      theory: "自己限界（Self-Imposed Limits）の解放",
      description: "自分自身で課した能力や器の枠組みを取り払う。",
    },
  },
  {
    id: 274,
    text: "今抱えている最大の疑問や迷いに対して、自分の中の『知恵者』は何と答えますか？",
    depth: "deep",
    source: {
      theory: "内なる智恵へのアクセス（Inner Mentor）",
      description:
        "すでに自分の中に備わっている直感や知恵の領域にアクセスして答えを引き出す。",
    },
  },
  {
    id: 275,
    text: "自分を動かすための『真の決意（Vow）』を一つだけ立てるなら、何ですか？",
    depth: "deep",
    source: {
      theory: "意図の宣言（Declaration of Intent）",
      description: "あやふやな希望ではなく、ブレない意志としての誓いを立てる。",
    },
  },
  {
    id: 276,
    text: "自分の成長のために『心地悪さ（ディスコンフォート）』をあえて選ぶ領域はどこですか？",
    depth: "deep",
    source: {
      theory: "ストレッチゾーンの選択",
      description:
        "成長がコンフォートゾーンの外側でのみ起こることを知り、適度なストレス領域へ踏み出す。",
    },
  },
  {
    id: 277,
    text: "自分が『自分の人生の作者である』と自覚したとき、次に描くシナリオは？",
    depth: "deep",
    source: {
      theory: "主体的著者性（Authorship）",
      description:
        "受動的な読者ではなく、人生の脚本を自ら書き進める著者としての意識を確立する。",
    },
  },
  {
    id: 278,
    text: "これまで学んできた内省や気づきを、日常の『行動』に落とし込む具体的な習慣は？",
    depth: "deep",
    source: {
      theory: "知行合一（Inquiry in Action）",
      description:
        "頭の中の気づきを、継続的で観測可能な現実の行動習慣へと落とし込む。",
    },
  },
  {
    id: 279,
    text: "自分が一番『生きている』『躍動している』と感じる瞬間に、共通している条件は？",
    depth: "deep",
    source: {
      theory: "アライブネス（Aliveness）の条件",
      description:
        "生命力が最大化する条件を分析し、意図的にその環境を再現する。",
    },
  },
  {
    id: 280,
    text: "この深い問いに向き合った今の自分に、心からの敬意を込めて言葉をかけるなら？",
    depth: "deep",
    source: {
      theory: "自己超越と受容の統合",
      description:
        "深い内省を成し遂げた自身の勇気を称え、自己との連帯感を深めて問いを閉じる。",
    },
  },
  {
    id: 281,
    text: "今、自分の目の前にある道は、自分が本当に進みたい道ですか？それとも流されて着いた場所ですか？",
    depth: "deep",
    source: {
      theory: "自律的航路（Autonomous Navigation）",
      description:
        "自覚的な選択によって現在地に到達しているか、惰性によるものかを見極める。",
    },
  },
  {
    id: 282,
    text: "自分が人生で遺したい『レガシー（足跡・価値）』は何ですか？",
    depth: "deep",
    source: {
      theory: "レガシー思考",
      description:
        "自分の存在が世界や周囲に残す影響の質について、長期的な視点から考察する。",
    },
  },
  {
    id: 283,
    text: "もし明日世界が終わるとしても、あなたが今日大切にしたい過ごし方は何ですか？",
    depth: "deep",
    source: {
      theory: "本質的価値の先鋭化",
      description:
        "極限状態を設定することで、装飾を取り払った本質的な欲求と愛の対象を浮き彫りにする。",
    },
  },
  {
    id: 284,
    text: "今のあなたを『支えている確信』や『揺るぎない信念』は何ですか？",
    depth: "deep",
    source: {
      theory: "アンカー・インサイトの再確認",
      description:
        "試練や変化の中でもブレない精神的支柱となる確信を再確認する。",
    },
  },
  {
    id: 285,
    text: "自分の人生で『一番大切にすべき人間関係』に、十分な時間と情熱を注げていますか？",
    depth: "deep",
    source: {
      theory: "関係性の質とウェルビーイング",
      description:
        "幸福度の決定要素である重要な対人関係へのリソース配分を最適化する。",
    },
  },
  {
    id: 286,
    text: "自分の可能性を試すことを止めている『内なるブレーキ』を、今日ここで外すとしたら？",
    depth: "deep",
    source: {
      theory: "意図的なブレイクスルー",
      description: "自己制限のブレーキを外すメンタルな意図設定を行う。",
    },
  },
  {
    id: 287,
    text: "自分が『自分の人生の100%の責任者』になると腹をくくったとき、何が変わりますか？",
    depth: "deep",
    source: {
      theory: "完全責任の原則（Radical Responsibility）",
      description:
        "環境や他者のせいにすることを完全に手放し、主体性を100%確立する。",
    },
  },
  {
    id: 288,
    text: "これまで出会ってきたすべての人や出来事に、意味があったと思える自分になれていますか？",
    depth: "deep",
    source: {
      theory: "全人生の受容（Life Integration）",
      description:
        "光も影も含むすべての過去を自身の肯定的な一部として統合する。",
    },
  },
  {
    id: 289,
    text: "今、あなたの内側で新しく始まろうとしている『静かな変化の予感』は何ですか？",
    depth: "deep",
    source: {
      theory: "インナー・シフトの微細な感知",
      description:
        "まだ明確な形をとっていない内面のパラダイムシフトの芽生えをキャッチする。",
    },
  },
  {
    id: 290,
    text: "自分自身のことを『心から愛し、誇りに思える』ようになるために、今不足しているものは何ですか？",
    depth: "deep",
    source: {
      theory: "自尊感情（Self-Esteem）の探求",
      description:
        "自己受容と自己誇りの間にある障壁を認識し、穴を埋めるアプローチを考える。",
    },
  },
  {
    id: 291,
    text: "自分の『情熱』と『世の中のニーズ』と『自分の得意』が重なる場所はどこですか？",
    depth: "deep",
    source: {
      theory: "生きがい（Ikigai）フレームワーク",
      description:
        "情熱・使命・職能・ニーズが交差する自分ならではの軸を導き出す。",
    },
  },
  {
    id: 292,
    text: "自分が過去の自分に『感謝』を伝えるとしたら、どの瞬間の決断に対してですか？",
    depth: "deep",
    source: {
      theory: "時間軸を超えた自己感謝",
      description:
        "今の自分を形作ってくれた過去の挑戦や選択を振り返り、肯定する。",
    },
  },
  {
    id: 293,
    text: "今、一番『直感』が伝えてきているメッセージは何で、それを無視していませんか？",
    depth: "deep",
    source: {
      theory: "体感知性（Somatic Intelligence）の尊重",
      description:
        "思考で打ち消しがちな体の直感やインスピレーションの声を聴く。",
    },
  },
  {
    id: 294,
    text: "自分の人生に『余白』と『静寂』を取り戻すために、今すぐに手放せる執着は何ですか？",
    depth: "deep",
    source: {
      theory: "静寂と余白の心理学（Solitude & Space）",
      description:
        "多忙や情報のノイズから離れ、深い思考が生まれる静寂を意識的に確保する。",
    },
  },
  {
    id: 295,
    text: "自分が目指す『最高の自分』は、どんな表情で、どんな言葉を使い、どんな姿勢で立っていますか？",
    depth: "deep",
    source: {
      theory: "理想の自己像のエンボディメント（Embodiment）",
      description:
        "理想像を身体的・言語的イメージとして具体化し、日常へ取り込む。",
    },
  },
  {
    id: 296,
    text: "他者に対して『もっと心を開く』ために、あなたが越えるべき自分自身の壁は何ですか？",
    depth: "deep",
    source: {
      theory: "オープンネスの開放",
      description:
        "心を開くことへの抵抗感を緩め、より深い人間関係へと足を踏み出す。",
    },
  },
  {
    id: 297,
    text: "自分の人生の中で、『まだ書かれていない素晴らしいページ』には何が書かれますか？",
    depth: "deep",
    source: {
      theory: "希望と開かれた未来（Open Future）",
      description:
        "過去の延長線上にない、新しくクリエイティブな未来の可能性に意識を開く。",
    },
  },
  {
    id: 298,
    text: "今、この場所・この時代に自分が生きている意味や巡り合わせをどう感じますか？",
    depth: "deep",
    source: {
      theory: "実存的コネクティビティ（Existential Connection）",
      description: "自分と世界、時代との関わりの中に固有の役割を見出す。",
    },
  },
  {
    id: 299,
    text: "自分が『真の自由』を手に入れるために、最後に解き放つべき内なる不自由は何ですか？",
    depth: "deep",
    source: {
      theory: "内解脱・精神的自由（Inner Freedom）",
      description:
        "外部の環境ではなく、自らの囚われ（こだわりや恐れ）から解放される。",
    },
  },
  {
    id: 300,
    text: "これまでのすべての対話を終えて、今、あなたの心に残っているたったひとつの『真実』は何ですか？",
    depth: "deep",
    source: {
      theory: "変容の統合と決着（Integration & Closure）",
      description:
        "全ての深い内省のプロセスを一つの澄み切った洞察に凝縮し、新たな歩みを開始する。",
    },
  },
];
