export interface Question {
  id: string
  subject: string // 과목명 (예: 해부학, 공중보건학, 법규)
  question: string
  options: string[]
  correctAnswer: number | number[] | string
  explanation?: string
  type?: "ox" | "mcq" | "multi-mcq" | "short-answer" | "matching"
}

export interface ExamPeriod {
  id: string
  name: string
  subjects: string[] // 이 교시에 포함된 과목명 목록
}

// ── 과목별 문제 pool ──────────────────────────────
// 문제는 추후 추가 예정입니다. 현재는 비어 있습니다.

// 해부학 (1교시)
const anatomyQuestions: Question[] = []

// 공중보건학 (1교시)
const publicHealthQuestions: Question[] = []

// 의료관계법규 (2교시)
const lawQuestions: Question[] = [
  {
    id: "law-1",
    subject: "의료관계법규",
    question: "의료법은 모든 국민이 수준 높은 의료 혜택을 받을 수 있도록 하여 국민의 건강을 보호하고 증진하는 데 목적이 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제1조에 명시된 법의 목적에 부합하는 올바른 설명입니다.",
  },
  {
    id: "law-2",
    subject: "의료관계법규",
    question: "약사는 의료법상 '의료인'에 포함된다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "의료법상 의료인은 의사, 치과의사, 한의사, 조산사, 간호사 5종류뿐입니다. 약사는 약사법의 적용을 받는 보건의료인으로 의료법상 의료인에는 해당하지 않습니다.",
  },
  {
    id: "law-3",
    subject: "의료관계법규",
    question: "의료기관이란 의료인이 국민을 위하여 의료·조산업을 하는 곳을 말한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "국민이 아닌 공중 또는 특정 다수인을 하는 곳임.",
  },
  {
    id: "law-4",
    subject: "의료관계법규",
    question: "의원급 의료기관에는 의원, 치과의원, 한의원, 요양병원이 포함된다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "의원급 의료기관은 의원, 치과의원, 한의원입니다. 요양병원은 병원급 의료기관에 해당합니다.",
  },
  {
    id: "law-5",
    subject: "의료관계법규",
    question: "병원급 의료기관의 종류에는 병원, 치과병원, 한방병원, 요양병원, 정신병원, 종합병원이 포함된다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제3조 제2항 제3호에 규정된 병원급 의료기관의 분류와 일치합니다.",
  },
  {
    id: "law-6",
    subject: "의료관계법규",
    question: "의료기관의 종류별 표준업무를 정하고 고시하는 주체는 대통령이다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "의료기관 종류별 표준업무를 정하여 고시하는 주체는 보건복지부장관입니다.",
  },
  {
    id: "law-7",
    subject: "의료관계법규",
    question: "종합병원은 기본적으로 100개 이상의 병상을 갖추어야 한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제3조의3에 의거하여 종합병원은 100개 이상의 병상을 갖추어야 합니다.",
  },
  {
    id: "law-8",
    subject: "의료관계법규",
    question: "100병상 이상 300병상 이하의 종합병원에는 영상의학과가 필수 진료과목으로 포함되어야 한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "필수 구성 과목(영상의학과, 마취통증의학과, 진단검사의학과 또는 병리과)에 포함되므로 맞습니다.",
  },
  {
    id: "law-9",
    subject: "의료관계법규",
    question: "100병상 이상 300병상 이하의 종합병원에는 병리과가 필수 진료과목으로 포함되어야 한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "필수 구성 과목(영상의학과, 마취통증의학과, 진단검사의학과 또는 병리과)에 포함되므로 맞습니다.",
  },
  {
    id: "law-10",
    subject: "의료관계법규",
    question: "100병상 이상 300병상 이하의 종합병원에는 마취통증의학과가 필수 진료과목으로 포함되어야 한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "필수 구성 과목(영상의학과, 마취통증의학과, 진단검사의학과 또는 병리과)에 포함되므로 맞습니다.",
  },
  {
    id: "law-11",
    subject: "의료관계법규",
    question: "종합병원은 필수진료과목 외의 진료과목에 대해서는 해당 의료기관에 전속하지 아니한 전문의를 둘 수 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제3조의3 제2항에 따라, 종합병원은 필수진료과목 외의 진료과목에 대해서는 비전속 전문의를 둘 수 있습니다.",
  },
  {
    id: "law-12",
    subject: "의료관계법규",
    question: "보건복지부장관은 특수질환에 대하여 난이도가 높은 의료행위를 전문적으로 행하는 종합병원을 상급종합병원으로 지정할 수 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "상급종합병원은 '특수질환'이 아니라 '중증질환'에 대하여 난이도가 높은 의료행위를 전문적으로 행하는 종합병원을 대상으로 지정합니다.",
  },
  {
    id: "law-12-period",
    subject: "의료관계법규",
    question: "보건복지부장관은 상급종합병원으로 지정된 의료기관에 대하여 1년마다 평가를 실시하여 재지정하거나 지정을 취소할 수 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "상급종합병원의 지정 평가 및 재지정/지정취소 주기는 3년마다 실시합니다.",
  },
  {
    id: "law-14-objective",
    subject: "의료관계법규",
    question: "상급종합병원으로 지정받기 위해서는 보건복지부령으로 정하는 15개 이상의 진료과목을 갖추고, 각 진료과목마다 전속하는 전문의를 두어야 한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "상급종합병원으로 지정받기 위해서는 보건복지부령으로 정하는 20개 이상의 진료과목을 갖추고 각 과목마다 전속하는 전문의를 두어야 합니다.",
  },
  {
    id: "law-13",
    subject: "의료관계법규",
    question: "의료인 외에 학생(의학·간호학 등 현장실습생), 간호조무사, 의료기사도 의료기관 내에서 명찰을 착용해야 하는 대상에 포함된다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제4조의2에 따라 의료인뿐만 아니라 학생, 간호조무사, 의료기사도 환자 알도록 명찰을 착용해야 합니다.",
  },
  {
    id: "law-14",
    subject: "의료관계법규",
    question: "격리병실, 수술실 내부, 응급의료 상황 등 보건복지부령으로 정하는 예외적인 경우에도 명찰을 착용해야만 한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "무균치료실, 격리병실, 응급실(응급의료상황), 수술실 내부, 의료행위를 하지 않는 경우, 보건복지부장관이 지정·고시하는 경우에는 명찰 착용 의무의 예외가 인정됩니다.",
  },
  {
    id: "law-15",
    subject: "의료계법규",
    question: "요양병원과 정신병원은 간호·간병통합서비스를 제공할 수 있는 병원급 의료기관에 해당한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "간호·간병통합서비스를 제공할 수 있는 의료기관은 병원급 의료기간 중 병원, 치과병원, 한방병원, 종합병원입니다. (요양병원, 정신병원은 제외됩니다.)",
  },
  {
    id: "law-16",
    subject: "의료관계법규",
    question: "금고 이상의 실형을 선고받고 그 집행이 끝난 날부터 3년이 지난 자는 의료인이 될 수 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "금고 이상의 실형을 선고받고 그 집행이 끝나거나(집행이 끝난 것으로 보는 경우를 포함) 집행을 받지 아니하기로 확정된 후 5년이 지나지 아니한 자는 결격사유에 해당합니다. (3년이 지난 것으로는 부족합니다.)",
  },
  {
    id: "law-17",
    subject: "의료관계법규",
    question: "금고 이상의 형의 집행유예를 선고받고 그 유예기간이 지난 후 1년이 경과한 자는 의료인 결격사유에 해당한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "금고 이상의 형의 집행유예를 선고받고 그 유예기간이 지난 후 2년이 지나지 아니한 자는 결격사유에 해당합니다. 따라서 유예기간 종료 후 1년이 경과한 자는 아직 2년이 되지 않았으므로 결격사유에 해당합니다.",
  },
  {
    id: "law-18",
    subject: "의료관계법규",
    question: "금고 이상의 형의 선고유예를 받고 그 유예기간 중에 있는 자는 의료인이 될 수 없다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "금고 이상의 형의 선고유예를 받고 그 유예기간 중에 있는 자는 의료법 제8조에 따른 의료인 결격사유에 해당합니다.",
  },

  {
    id: "law-21",
    subject: "의료관계법규",
    question: "누구든지 의료기관을 점거하여 진료를 방해해서는 안 되며, 이를 교사하거나 방조해서도 안 된다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제12조에 따라 진료 방해 목적의 의료기관 점거 및 그 교사·방조 행위는 금지됩니다.",
  },
  {
    id: "law-22",
    subject: "의료관계법규",
    question: "의료업무에 필요한 기구 및 약품 등 재료는 채무가 발생하더라도 압류할 수 없다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제13조에 따라 의료인이나 의료기관이 의료업무에 사용하는 보건복지부령으로 정하는 기구·약품 및 기타 재료는 압류할 수 없습니다.",
  },
  {
    id: "law-23",
    subject: "의료관계법규",
    question: "의료인은 의료행위에 필요한 시설, 재료, 물품 및 교통수단에 대해 우선하여 공급받을 권리가 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제14조에 명시된 내용입니다.",
  },
  {
    id: "law-24",
    subject: "의료관계법규",
    question: "의료인이나 의료기관 개설자는 진료나 조산 요청을 받으면 정당한 사유가 있더라도 거부할 수 없다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "의료법은 정당한 사유 없이 진료나 조산 요청을 거부하지 못하도록 정하고 있으므로, 정당한 사유가 있으면 거부할 수 있습니다.",
  },
  {
    id: "law-25",
    subject: "의료관계법규",
    question: "의료기관의 세탁물 처리업을 하려는 자는 보건복지부장관에게 신고해야 한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "세탁물 처리업 신고 대상 기관은 특별자치시장·특별자치도지사·시장·군수·구청장입니다.",
  },
  {
    id: "law-26",
    subject: "의료관계법규",
    question: "세탁물의 보관·운반·처리 및 세탁물 처리업자의 감염예방교육 등에 관한 세부 규정은 대통령령으로 정한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "세탁물 처리에 관한 구체적인 사항은 보건복지부령으로 정합니다.",
  },
  {
    id: "law-27",
    subject: "의료관계법규",
    question: "직접 진찰한 의사가 부득이한 사유로 진단서를 교부할 수 없는 경우, 같은 의료기관에 종사하는 다른 의사가 진료기록부 등에 따라 교부할 수 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제17조에 따라 같은 의료기관의 다른 의사가 대신 작성·교부할 수 있습니다.",
  },
  {
    id: "law-28",
    subject: "의료관계법규",
    question: "다음 중 의료법상 출생·사망 또는 사산 증명서를 작성·교부할 수 있는 권한을 가진 자로만 짝지어진 것은?",
    options: ["의사, 치과의사, 한의사", "의사, 한의사, 조산사", "의사, 치과의사, 조산사", "의사, 치과의사, 한의사, 조산사"],
    correctAnswer: 1,
    type: "mcq",
    explanation: "출생·사망·사산 증명서는 의사, 한의사, 조산사가 작성할 수 있습니다. 치과의사는 해당 증명서를 작성할 수 없습니다.",
  },
  {
    id: "law-29",
    subject: "의료관계법규",
    question: "환자의 의식이 없거나 상태가 동일하여 장기간 같은 처방이 이루어지는 등 안정성이 인정되는 경우 대리처방이 가능하다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제17조의2에 따른 대리처방 요건에 부합합니다.",
  },
  {
    id: "law-30",
    subject: "의료관계법규",
    question: "다음 중 의료법상 환자를 대신하여 처방전을 대리 수령할 수 있는 자의 범위에 해당하지 않는 사람은?",
    options: ["환자의 직계존속·비속 및 직계비속의 배우자", "환자의 배우자 및 배우자의 직계존속", "환자의 형제자매", "노인의료복지시설에 근무하는 사람", "환자가 거주하는 아파트의 입주자대표회장"],
    correctAnswer: 4,
    type: "mcq",
    explanation: "대리수령 가능 범위는 법에서 정한 가족, 노인의료복지시설 사자 및 보.복 장관이 인정하는 사람으로 한정되므로 아파트 입주자대표회장은 해당하지 않습니다.",
  },
  {
    id: "law-31",
    subject: "의료관계법규",
    question: "환자의 형제자매는 환자의 처방전을 대리 수령할 수 있는 대상에 포함된다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "형제자매는 의료법상 처방전 대리수령 가능한 범위에 포함됩니다.",
  },
  {
    id: "law-32",
    subject: "의료관계법규",
    question: "약사가 처방전 내용에 대해 문의한 경우, 의사는 수술이나 응급환자 진료 중이라도 즉시 답변해야 한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "응급환자 진료중 이거나 수술·처지 중인 경우 정당한 사유 있으면 즉시 응하지 않아도 됩니다.",
  },
  {
    id: "law-33",
    subject: "의료관계법규",
    question: "의료인은 태아의 성 감별을 목적으로 임신부를 진찰하거나 검사해서는 안 되며, 이를 돕는 행위도 금지된다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제20조에 따라 태아 성 감별 목적의 진찰·검사 및 교사·방조 행위는 금지됩니다.",
  },
  {
    id: "law-34",
    subject: "의료관계법규",
    question: "의료인은 환자아닌 다른 사람에게 환자에 관한 기록을 열람하게 하거나 사본을 교부해서는 안 되는 것이 원칙이다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제21조 제1항에 따라 환자의 비밀 보호를 위해 타인 제공 금지가 원칙입니다.",
  },
  {
    id: "law-35",
    subject: "의료관계법규",
    question: "환의 배우자나 직계 존속·비속이 환자의 진료기록을 열람하고자 할 때, 환자가 사망한 경우가 아니라면 반드시 환자의 동의서와 친족관계 증명서류를 제출해야 한다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "환자의 동의를 받을 수 있는 상태라면 친족이라도 동의서와 관계 증명서류를 갖추어야 합니다.",
  },
  {
    id: "law-36",
    subject: "의료관계법규",
    question: "보건복지부장관은 진료기록의 안전한 전송을 위한 진료기록전송지원시스템을 구축·운영할 수 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "의료법 제21조의2에 따라 보건복지부장관이 시스템 구축·운영 주체가 됩니다.",
  },
  {
    id: "law-37",
    subject: "의료관계법규",
    question: "진료기록전송지원시스템의 구축·운영을 위탁받은 전문기관은 보건복지부장관의 승인을 받아 타 기관에 재위탁할 수 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "정보 보안과 안전성 확보를 위해 전문기관의 업무 재위탁은 금지됩니다.",
  },
  {
    id: "law-38",
    subject: "의료관계법규",
    question: "다른 의료기관으로 전원하는 환자는 자신의 진료기록 전송 요청을 대리인에게 위임하여 처리하게 할 수 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 0,
    explanation: "환자는 진료기록 전송 요청을 대리인을 통해 진행할 수 있습니다.",
  },
  {
    id: "law-39",
    subject: "의료관계법규",
    question: "진료기록전송지원시스템 및 진료기록 전송 요청과 관련된 법령 규정에 대한 설명 중 가장 올바르지 않은 것은?",
    options: ["환자의 이송 시 의료기관은 진료기록을 함께 송부할 수 있다.", "다른 의료기관으로 전원 시 진료기록 송부를 요청받은 의료기관은 정당한 사유 없이 이를 거부해서는 안 된다.", "진료기록전송지원시스템의 구축·운영에 관한 세부 사항은 보건복지부령으로 정한다.", "진료기록 전송 요청의 방법 및 절차는 보건복지부령으로 정한다."],
    correctAnswer: 2,
    type: "mcq",
    explanation: "진료기록전송지원시스템의 구축·운영에 필요한 사항은 대통령령으로 정하며, 전송 요청의 방법 및 절차는 보건복지부령으로 정합니다.",
  },
  {
    id: "law-40",
    subject: "의료관계법규",
    question: "환자가 사망한 경우, 배우자나 직계존속·비속이 남아있더라도 형제자매는 우선적으로 사망진단서나 진료기록을 발급받을 수 있다.",
    options: ["O", "X"],
    type: "ox",
    correctAnswer: 1,
    explanation: "선순위 유가족이 모두 없는 경우에 한하여 형제자매가 발급받을 수 있습니다.",
  },
  {
    id: "law-41", subject: "의료관계법규", question: "진료기록부의 서식·세부내용에 관한 표준을 마련하여 고시하거나 권고하는 주체는 누구인가?", options: ["보건복지부장관"], correctAnswer: 0, type: "short-answer", explanation: "정관 기재사항은 대통령령으로 정하고, 정관 변경사항은 보건복지부장관의 허가를 받아야 합니다.",
  },
  {
    id: "law-42", subject: "의료관계법규", question: "진료기록부 등의 보존기간 연결로 옳은 것은?", options: ["진료기록부·수술기록부 — 10년", "환자명부·간호기록부·검사소견기록·방사선사진 — 5년", "진단서 등 부본 — 3년", "처방전 — 2년", "방사선사진 및 그 소견서 — 3년"], correctAnswer: 0, type: "mcq", explanation: "진료기록부·수술기록부는 10년, 환자명부·간호기록부·검사소견기록·방사선사진 및 그 소견서는 5년, 진단서 등 부본은 3년, 처방전은 2년입니다.",
  },
  {
    id: "law-43", subject: "의료관계법규", question: "진료정보 침해사고가 발생하면 의료인은 보건복지부장관에게 통지해야 하며, 장관은 관계 행정기관에 통보해야 한다.", options: ["O", "X"], correctAnswer: 0, type: "ox", explanation: "진료정보 침해사고 발생 시 의료인의 통지 및 장관의 통보 의무에 해당합니다.",
  },
  {
    id: "law-44", subject: "의료관계법규", question: "전자의무기록시스템 인증에 관한 설명 중 옳지 않은 것은?", options: ["보건복지부장관은 표준 준수를 권고할 수 있다.", "인증받은 자는 인증 내용을 표시할 수 있다.", "인증 기준에 적합한 전자의무기록시스템에 대해 인증할 수 있다.", "대통령은 거짓이나 부정한 방법으로 인증을 받은 경우 인증을 취소할 수 있다."], correctAnswer: 3, type: "mcq", explanation: "거짓이나 부정한 방법으로 인증을 받은 경우 인증을 취소할 수 있는 주체는 대통령이 아니라 보건복지부장관입니다.",
  },
  {
    id: "law-45", subject: "의료관계법규", question: "부당한 경제적 이익 취득 금지 대상이 아닌 것은?", options: ["의료인", "의료기관 개설자", "의료기관 종사자", "제약회사 의약품 연구원"], correctAnswer: 3, type: "mcq", explanation: "금지 대상은 의료인, 의료기관 개설자 및 의료기관 종사자입니다.",
  },
  {
    id: "law-46", subject: "의료관계법규", question: "의약품 공급자로부터 예외적으로 받을 수 있는 경제적 이익에 해당하지 않는 것은?", options: ["견본품 제공", "학술대회 지원", "신제품 출시 기념 해외관광", "제품설명회 지원"], correctAnswer: 2, type: "mcq", explanation: "단순 해외관광 경비 지원은 허용되는 예외가 아닙니다.",
  },
  {
    id: "law-47", subject: "의료관계법규", question: "의사의 의료행위 설명 및 동의에 관한 설명으로 옳지 않은 것은?", options: ["수술, 수혈, 전신마취를 하는 경우 환자에게 설명하고 서면 동의를 받아야 한다.", "설명 및 동의 절차를 거친 동의서는 2년간 보관하여야 한다.", "생명이 위급하여 설명 및 동의로 인해 수술이 지연되면 위험해지는 경우에도 반드시 사전에 서면 동의를 받아야 한다.", "수술에 참여하는 주관 의사가 변경되는 경우 환자에게 서면으로 알려야 한다."], correctAnswer: 2, type: "mcq", explanation: "응급환자 등 설명 및 동의로 인해 수술이 지연되면 생명이 위험해지거나 중대한 장애가 발생할 우려가 있는 경우에는 설명 및 동의 절차를 거치지 않을 수 있습니다.",
  },
  {
    id: "law-48", subject: "의료관계법규", question: "수술·수혈·전신마취 시 설명하고 동의받아야 할 사항이 아닌 것은?", options: ["증상의 진단명", "수술의 필요성·방법·내용", "참여 의사의 성명", "건강보험료 납부 등급 및 재산 현황"], correctAnswer: 3, type: "mcq", explanation: "건강보험료와 재산 현황은 설명·동의 필수사항이 아닙니다.",
  },
  {
    id: "law-49", subject: "의료관계법규", question: "의료인의 면허 신고 및 보수교육에 관한 설명으로 옳지 않은 것은?", options: ["의료인은 최초 면허를 받은 후부터 3년마다 취업상황 등을 보건복지부장관에게 신고해야 한다.", "보수교육을 이수하지 아니한 의료인에 대해서는 신고를 반려할 수 있다.", "보건복지부장관은 신고 수리 업무를 관련 단체에 위탁할 수 있다.", "신고 수리 업무를 위탁받는 관련 단체는 각 지자체 보건소이다."], correctAnswer: 3, type: "mcq", explanation: "신고 수리 업무를 위탁받는 관련 단체는 의료인 단체의 중앙회입니다.",
  },
  {
    id: "law-50", subject: "의료관계법규", question: "의사·치과·한의사 또는 조산사는 사체를 검안하고 변사한 것으로 의심되는 때에는 24시간 이내에 보건복지부장관에게 신고하여야 한다.", options: ["O", "X"], correctAnswer: 1, type: "ox", explanation: "변사한 것으로 의심되는 때에는 보건복지부장관이 아니라 관할 경찰서장에게 신고하여야 합니다.",
  },
  {
    id: "law-51", subject: "의료관계법규", question: "무면허 의료행위 예외에 해당하지 않는 것은?", options: ["외국 의료인 면허 소지자", "의료봉사 목적의 행위", "관련 전공 학생의 실습", "약사가 요청받아 수행하는 긴급 진료"], correctAnswer: 3, type: "mcq", explanation: "약사에게 일반적인 무면허 의료행위 예외가 인정되는 것은 아닙니다.",
  },
  {
    id: "law-52", subject: "의료관계법규", question: "환자의 경제적 사정 등 특별한 사유로 관할 행정기관의 승인을 받은 경우 예외적으로 환자 유치·소개·알선 행위가 허용된다. 관할 행정기관은?", options: ["시장·군수·구청장"], correctAnswer: 0, type: "short-answer", explanation: "특별한 사유가 있는 경우 관할 시장·군수·구청장의 승인을 받을 수 있습니다.",
  },
  {
    id: "law-53", subject: "의료관계법규", question: "외국인 등록을 한 사람이나 국내거소신고를 한 외국국적동포는 '외국인 환자 유치행위'가 허용되는 대상 외국인에 해당한다.", options: ["O", "X"], correctAnswer: 1, type: "ox", explanation: "외국인 등록을 한 사람과 국내거소신고를 한 외국국적동포는 국내에 거주하는 자로 보아 외국인 환자 유치행위 대상에서 제외됩니다.",
  },
  {
    id: "law-54", subject: "의료관계법규", question: "외국인 환자 유치 등록을 할 수 없는 금융 관계 대상이 아닌 것은?", options: ["보험회사", "상호회사", "보험설계사·보험중개사", "외국계 은행 국내 지점"], correctAnswer: 3, type: "mcq", explanation: "보험회사 등 보험업 관련 대상은 등록할 수 없습니다.",
  },
  {
    id: "law-55", subject: "의료관계법규", question: "다음 중 의료인 단체(중앙회)에 관한 설명으로 가장 올바르지 않은 것은?", options: ["의사·치과의사·한의사·조산사는 종별에 따라 각각 중앙회를 설립하여야 한다.", "중앙회는 법인으로 한다.", "의료인은 당연히 해당 중앙회의 회원이 되며, 정관을 준수하여야 한다.", "중앙회에 관하여 의료법에 규정된 것 외에는 민법 중 재단법인에 관한 규정을 준용한다.", "중앙회는 특별시·광역시·특별자치시·도·특별자치도에 지부를 설치하여야 한다.", "중앙회가 국외에 지부를 설치하려면 보건복지부장관의 승인을 받아야 한다.", "중앙회가 분회를 설치한 때에는 관할 특별시장·광역시장·도지사 또는 시장·군수·구청장에게 신고하여야 한다.", "의료인의 자격정지 처분 요구 등을 심의하기 위하여 중앙회에 윤리위원회를 둔다."], correctAnswer: 3, type: "mcq", explanation: "중앙회에 관하여 의료법에 규정된 것 외에는 민법 중 사단법인에 관한 규정을 준용합니다.",
  },
  {
    id: "law-56", subject: "의료관계법규", question: "윤리위원회 위원(위원장 포함 11명)의 임기는 몇 년인가?", options: ["3년 (1회에 한하여 연임 가능)"], correctAnswer: 0, type: "short-answer", explanation: "윤리위원의 임기는 3년이고 1회에 한하여 연임할 수 있습니다.",
  },
  {
    id: "law-57", subject: "의료관계법규", question: "윤리위원회의 위원장은 누구에 의해 위촉되는가?", options: ["중앙회의 장"], correctAnswer: 0, type: "short-answer", explanation: "중앙회의 장이 위원 중에서 위원장을 위촉합니다.",
  },
  {
    id: "law-58", subject: "의료관계법규", question: "윤리위원회 위원은 반드시 의료인 경력이 10년 이상인 의료인으로만 구성하여야 하며, 비의료인은 위원이 될 수 없다.", options: ["O", "X"], correctAnswer: 1, type: "ox", explanation: "법률·보건·소비자권익 등에 학식과 경험이 풍부한 비의료인도 포함될 수 있습니다.",
  },
  {
    id: "law-59", subject: "의료관계법규", question: "윤리위원회는 소속 회원의 자격정지 처분 요구에 관한 사항, 소속 회원의 징계 및 윤리확립에 필요한 사항을 심의·의결한다.", options: ["O", "X"], correctAnswer: 0, type: "ox", explanation: "윤리위원회의 핵심 업무에 해당합니다.",
  },
  {
    id: "law-60", subject: "의료관계법규", question: "중앙회를 설립하기 위해 정관에 적어야 할 사항은 어느 법령으로 정하는가?", options: ["대통령령"], correctAnswer: 0, type: "short-answer", explanation: "정관 기재사항은 대통령령으로 정합니다.",
  },
  {
    id: "law-61", subject: "의료관계법규", question: "중앙회가 설립 후 정관을 변경하고자 할 때 누구의 허가를 받아야 하는가?", options: ["보건복지부장관"], correctAnswer: 0, type: "short-answer", explanation: "정관 변경에는 보건복지부장관의 허가가 필요합니다.",
  },
  {
    id: "law-62", subject: "의료관계법규", question: "의료인 단체 중앙회의 협조 의무 및 보수교육에 대한 설명으로 올바르지 않은 것은?", options: ["보건복지부장관으로부터 보건의료 사업에 관한 협조 요청을 받으면 응해야 한다.", "중앙회는 회원의 자질 향상을 위해 보수교육을 실시해야 한다.", "의사, 치과의사, 한의사, 조산사는 보수교육을 받아야 한다.", "보수교육은 간호사에게는 적용되지 않으며 의사만 의무 대상이다."], correctAnswer: 3, type: "mcq", explanation: "간호사를 포함하여 의사, 치과의사, 한의사, 조산사 등 모든 의료인은 보수교육 대상입니다.",
  },
  {
    id: "law-63", subject: "의료관계법규", question: "의료법상 보수교육의 방법 및 관리에 대한 내용으로 옳지 않은 것은?", options: ["보수교육은 매년 실시하여야 한다.", "보수교육 시간은 연간 8시간 이상으로 한다.", "보수교육 실적 및 관련 서류는 3년간 보존하여야 한다.", "불가피한 경우면, 보수교육은 5년에 한 번씩 몰아서 이수 할 수 있다."], correctAnswer: 3, type: "mcq", explanation: "보수교육은 매년 실시해야 하며, 불가피한 경우라도 5년에 한 번에 몰아서 이수할 수 없습니다.",
  },
  {
    id: "law-64", subject: "의료관계법규", question: "다음 중 보수교육 면제에 해당하지 않는 사람?", options: ["전공의", "관련 전공 대학원 재학생", "해당 연도 신규 면허 취득자", "병원 경영 악화로 임시 휴업 중인 개업의"], correctAnswer: 3, type: "mcq", explanation: "임시 휴업만으로 보수교육 면제자가 되지는 않습니다.",
  },
  {
    id: "law-65", subject: "의료관계법규", question: "보수교육 유예 대상에 해당하는 사람은?", options: ["6개월 이상 의료업무에 종사하지 않은 사람", "대학원 재학생", "면허 취득 1년 경과자", "3개월간 해외 연수자"], correctAnswer: 0, type: "mcq", explanation: "6개월 이상 해당 업무에 종사하지 않은 사람은 유예 대상이 될 수 있습니다.",
  },
  {
    id: "law-66", subject: "의료관계법규", question: "의원급 의료기관을 개설하려는 자는 누구에게 신고해야 하는가?", options: ["시장·군수·구청장"], correctAnswer: 0, type: "short-answer", explanation: "의원급 의료기관은 관할 시장·군수·구청장에게 신고합니다.",
  },
  {
    id: "law-67", subject: "의료관계법규", question: "병원급 의료기관을 개설하려는 자는 의료기관개설위원회의 사전심의를 거쳐 누구의 허가를 받아야 하는가?", options: ["시·도지사 (특별시장·광역시장·특별자치시장·도지사·특별자치도지사)"], correctAnswer: 0, type: "short-answer", explanation: "병원급 의료기관은 의료기관개설위원회의 사전심의를 거쳐 시·도지사의 허가를 받아야 합니다.",
  },
  {
    id: "law-68", subject: "의료관계법규", question: "병원급 의료기관 개설자가 의료기관을 추가로 개설하려는 경우 사전심의 단계에서 누구의 승인을 받아야 하는가?", options: ["보건복지부장관"], correctAnswer: 0, type: "short-answer", explanation: "추가 개설 시 사전심의 단계에서 보건복지부장관의 승인이 필요합니다.",
  },
  {
    id: "law-69", subject: "의료관계법규", question: "의료인은 어떠한 명목으로도 둘 이상의 의료기관을 개설하거나 운영할 수 없다.", options: ["O", "X"], correctAnswer: 0, type: "ox", explanation: "의료법상 1인 1개소 원칙입니다.",
  },
  {
    id: "law-70", subject: "의료관계법규", question: "의료기관 외 의료행위 허용 예외가 아닌 것은?", options: ["응급환자 진료", "환자나 보호자의 요청에 따른 진료", "국가나 지자체의 공익상 필요", "전화 요청만으로 사전 진찰 없이 방문 처치"], correctAnswer: 3, type: "mcq", explanation: "전화 요청만으로 사전 확인 없이 시행하는 의료행위는 예외에 해당하지 않습니다.",
  },
  {
    id: "law-71", subject: "의료관계법규", question: "의료법상 의료기관을 개설할 수 있는 자의 범위에 해당하지 않는 것은?", options: ["의사, 치과의사, 한의사, 조산사", "국가 또는 지방자치단체", "의료법인 및 비영리법인", "영리목적의 일반 주식회사"], correctAnswer: 3, type: "mcq", explanation: "의료기관은 법에서 정한 의료인, 국가·지방자치단체, 의료법인 및 비영리법인 등이 개설할 수 있습니다.",
  },
  {
    id: "law-72", subject: "의료관계법규", question: "의료법 시행규칙상 가정간호의 사업 범위에 해당하지 않는 것은?", options: ["간호 및 채취·운반", "투약, 주사 및 응급처치 교육·훈련", "상담 및 보건의료기관 등에 대한 건강관리 의뢰", "전문 수술 및 전신마취 시술"], correctAnswer: 3, type: "mcq", explanation: "가정간호 범위에는 간호, 투약, 주사, 상담, 건강관리 의뢰 등이 포함되며 전문 수술과 전신마취는 포함되지 않습니다.",
  },
]

// ── 과목명 → 문제 pool 매핑 ───────────────────────
const subjectQuestions: Record<string, Question[]> = {
  해부학: anatomyQuestions,
  공중보건학: publicHealthQuestions,
  의료관계법규: lawQuestions,
}

// ── 교시 구성 ──────────────────────────────────
export const examPeriods: ExamPeriod[] = [

  {
    id: "period1",
    name: "1교시",
    subjects: ["해부학"],
  },
  {
    id: "period2",
    name: "2교시",
    subjects: ["의료관계법규"],
  },
]

// 배열을 섞는 유틸
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

// 문제 순서뿐 아니라 선택지 순서도 섞어 정답 위치를 고정하지 않는다.
function shuffleQuestionOptions(question: Question): Question {
  const optionsWithIndex = question.options.map((option, index) => ({ option, index }))
  const shuffled = shuffle(optionsWithIndex)

  return {
    ...question,
    options: shuffled.map(({ option }) => option),
    correctAnswer: Array.isArray(question.correctAnswer)
      ? question.correctAnswer.map((answer) => shuffled.findIndex(({ index }) => index === answer))
      : typeof question.correctAnswer === "number"
        ? shuffled.findIndex(({ index }) => index === question.correctAnswer)
        : question.correctAnswer,
  }
}

// 여러 과목의 문제를 자연스럽게 섞어(round-robin) 하나의 퀴즈로 구성한다.
function interleave(pools: Question[][]): Question[] {
  const shuffledPools = pools.map((pool) => shuffle(pool))
  const result: Question[] = []
  const maxLen = Math.max(0, ...shuffledPools.map((p) => p.length))

  for (let i = 0; i < maxLen; i++) {
    for (const pool of shuffledPools) {
      if (i < pool.length) {
        result.push(pool[i])
      }
    }
  }

  return result
}

// 교시 선택 시 해당 교시의 모든 과목 문제를 섞어서 반환한다.
export function getQuestionsForPeriod(periodId: string, count = 20): Question[] {
  const period = examPeriods.find((p) => p.id === periodId)
  if (!period) return []

  const pools = period.subjects.map((subject) => subjectQuestions[subject] ?? [])
  const mixed = interleave(pools)

  return mixed
    .slice(0, Math.min(count, mixed.length))
    .map(shuffleQuestionOptions)
}

// 5주차 의료관계법규 문제 (73~100번)
const weekFiveQuestions: Question[] = [
  { id: "law-73", subject: "의료관계법규", question: "의료기관개설위원회는 보건복지부장관 소속으로 설치된다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "의료기관개설위원회는 시·도지사 소속입니다." },
  { id: "law-74", subject: "의료관계법규", question: "의료기관을 개설할 수 없는 자가 의료기관을 개설·운영하는지 파악하기 위해 실시하는 조사와 주기로 옳은 것은?", options: ["실태조사 / 매년", "정기조사 / 2년마다", "현황조사 / 3년마다", "특별조사 / 5년마다"], type: "mcq", correctAnswer: 0, explanation: "실태조사를 매년 실시합니다." },
  { id: "law-75", subject: "의료관계법규", question: "원격의료에서 통신기술을 활용하여 먼 곳에 있는 의료인에게 의료기술을 지원하는 의료인은?", options: ["현지의사", "원격지의사", "책임의사", "협진의사"], type: "mcq", correctAnswer: 1, explanation: "원격의료를 제공하는 의사를 원격지의사라고 합니다." },
  { id: "law-76", subject: "의료관계법규", question: "다음 중 원격진료가 가능한 경우에 해당하지 않는 것은?", options: ["일정 기간 동일 증상으로 진료받은 경우", "환자의 거주지와 의료기관 소재지가 동일한 경우", "희귀질환자 등 동일 지역 밖에서 원격진료가 필요한 경우", "처음 방문한 의료기관에 초진 받은 경우"], type: "mcq", correctAnswer: 3, explanation: "정리된 원격진료 조건에는 지속적인 동일 증상 진료, 동일 지역 거주, 희귀질환자 등이 포함되며 초진은 해당하지 않습니다." },
  { id: "law-77", subject: "의료관계법규", question: "부속의료기관을 개설할 때 병원급은 시·도지사에게 신고하고, 의원급은 시·군·구에 허가를 받아야 한다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "병원급은 시·도지사에게 허가를 받고, 의원급은 시·군·구에 신고합니다." },
  { id: "law-78", subject: "의료관계법규", question: "다음 중 요양병원의 입원 대상 해당하지 않는 것은?", options: ["노인성 질환자", "만성질환자", "외과 수술 후 회복기간에 있는 자", "감염병질환자"], type: "mcq", correctAnswer: 3, explanation: "요양병원 입원 대상에는 노인성 질환자, 만성질환자, 외과 수술 후 회복기간에 있는 자 등이 있으며 감염병질환자는 해당하지 않습니다." },
  { id: "law-79", subject: "의료관계법규", question: "간호사의 정원 기준은 1일 입원환자 2.5명당 1명이다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "간호사는 1일 입원환자 2.5명당 1명을 기준으로 합니다." },
  { id: "law-80", subject: "의료관계법규", question: "의료기관은 공중보건의사 의료행위를 하게 하도록 하거나 당직의료인으로 둘 수 있다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "공중보건의사에게 의료행위를 하게 하거나 당직의료인으로 두어서는 안 됩니다." },
  { id: "law-81", subject: "의료관계법규", question: "진단용 방사선 발생장치를 설치·운영하는 경우 신고해야 하는 기관은?", options: ["보건복지부장관", "질병관리청장", "시·도지사", "시·군·구"], type: "mcq", correctAnswer: 3, explanation: "시·군·구에 신고해야 합니다." },
  { id: "law-82", subject: "의료관계법규", question: "특수의료장비를 설치·운영하려는 의료기관 개설자는 시·군·구에 등록하여야 한다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "특수의료장비를 설치·운영하려는 경우 시·군·구에 등록해야 합니다." },
  { id: "law-83", subject: "의료관계법규", question: "수술실 CCTV 영상정보는 몇 일 동안 보관해야 하는가?", options: ["7일", "14일", "30일", "60일"], type: "mcq", correctAnswer: 2, explanation: "수술실 CCTV 영상정보는 30일 동안 보관합니다." },
  { id: "law-84", subject: "의료관계법규", question: "다음 중 수술실 CCTV 촬영을 거절할 수 있는 사유가 아닌 것은?", options: ["응급수술 시행 중인 경우", "위험도가 높은 수술을 시행 중인 경우", "전공의 수련 목적 달성을 저해할 우려가 있는 경우", "환자가 단순히 촬영이 불편하다고 요청한 경우"], type: "mcq", correctAnswer: 3, explanation: "응급수술, 위험도가 높은 수술, 전공의 수련 목적 저해 우려 등 법에서 정한 경우에 촬영을 거절할 수 있습니다." },
  { id: "law-85", subject: "의료관계법규", question: "다음 중 수술실 CCTV 영상정보를 열람할 수 있는 경우가 아닌 것은?", options: ["수사를 위해 관계 기관이 요청하는 경우", "분쟁조정중재원이 의료분쟁 조정을 위해 요청하는 경우", "정보주체 모두의 동의를 받은 경우", "병원 직원이 업무상 필요하다고 판단하여 요청하는 경우"], type: "mcq", correctAnswer: 3, explanation: "영상정보는 법에서 정한 경우에 한하여 열람할 수 있으며, 병원 직원의 임의 판단만으로 열람할 수 없습니다." },
  { id: "law-86", subject: "의료관계법규", question: "의료인이 다른 의료기관에서 진료할 때 의료인의 과실로 의료사고가 발생한 경우 그 책임은 의료기관 개설자에게 있다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "진료한 의료인의 과실이면 해당 의료인에게, 장비 결함이면 의료기관 개설자에게 책임이 있습니다." },
  { id: "law-87", subject: "의료관계법규", question: "의료업을 폐업하거나 1개월 이상 휴업하려는 경우 신고해야 하는 기관은?", options: ["보건복지부장관", "시·도지사", "시·군·구", "보건소장"], type: "mcq", correctAnswer: 2, explanation: "의료업을 폐업하거나 1개월 이상 휴업하는 경우 시·군·구에 신고합니다." },
  { id: "law-88", subject: "의료관계법규", question: "의료기관이 폐업 또는 휴업하는 경우 진료기록부는 누구에게 넘겨야 하는가?", options: ["시·도지사", "보건복지부장관", "보건소장", "질병관리청장"], type: "mcq", correctAnswer: 2, explanation: "폐업 또는 휴업하는 경우 진료기록부는 보건소장에게 넘겨야 합니다." },
  { id: "law-89", subject: "의료관계법규", question: "요양병원의 당직의료인은 입원환자 300명당 의사·치과의사·한의사 1명 기준이다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "요양병원은 입원환자 300명당 의사·치과의사·한의사 1명 기준입니다." },
  { id: "law-90", subject: "의료관계법규", question: "다음 중 의료기관 종류 외의 명칭을 사용할 수 있는 경우가 아닌 것은?", options: ["종합병원", "정신병원", "상급종합병원 및 전문병원으로 지정받은 기간 동안 사용하는 경우", "개인이 임의로 원하는 명칭을 사용하는 경우"], type: "mcq", correctAnswer: 3, explanation: "의료기관 종류 외의 명칭은 법에서 정한 경우에만 사용할 수 있습니다." },
  { id: "law-91", subject: "의료관계법규", question: "의료기관은 비급여 진료비용을 고지·게시한 금액을 초과하여 징수할 수 없다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "비급여 진료비용은 환자가 쉽게 알 수 있도록 고지해야 하며, 고지·게시한 금액을 초과하여 징수할 수 없습니다." },
  { id: "law-92", subject: "의료관계법규", question: "비급여 진료비용 등에 관한 사항을 보고받고 현황을 조사·분석하는 주체는?", options: ["시·군·구", "보건복지부장관", "질병관리청장", "시·도지사"], type: "mcq", correctAnswer: 1, explanation: "보건복지부장관은 비급여 진료비용 등의 사항을 보고받고 현황을 조사·분석할 수 있습니다." },
  { id: "law-93", subject: "의료관계법규", question: "환자는 특정한 의사를 선택하여 진료를 요청할 수 있고, 진료의사의 변경도 요청할 수 있다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "환자는 특정한 의사를 선택하여 진료를 요청할 수 있으며 진료의사 변경도 요청할 수 있습니다." },
  { id: "law-94", subject: "의료관계법규", question: "감염관리위원회와 감염관리실을 설치·운영해야 하는 의료기관은 100개 이상의 병상을 갖춘 의료기관이다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "100개 이상 병상을 갖춘 의료기관은 감염관리위원회와 감염관리실을 설치·운영해야 합니다" },
  { id: "law-95", subject: "의료관계법규", question: "의료법인을 설립하려는 자가 허가를 받아야 하는 기관은?", options: ["보건복지부장관", "질병관리청장", "시·도지사", "시·군·구"], type: "mcq", correctAnswer: 2, explanation: "의료법인을 설립하려는 자는 시·도지사의 허가를 받아야 합니다." },
  { id: "law-96", subject: "의료관계법규", question: "의료법인의 이사 임기는 4년을 초과할 수 없으며, 감사는 2년을 초과할 수 없다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "의료법인의 이사 임기는 4년, 감사의 임기는 2년을 초과할 수 없습니다." },
  { id: "law-97", subject: "의료관계법규", question: "다음 중 의료법인이 할 수 있는 부대사업에 해당하지 않는 것은?", options: ["장례식장 운영", "부설주차장 설치·운영", "의료정보시스템 개발·운영사업", "의료와 관계없는 금융업"], type: "mcq", correctAnswer: 3, explanation: "의료법인의 부대사업에는 장례식장, 부설주차장, 의료정보시스템 개발·운영사업 등이 포함되며 의료와 관계없는 금융업은 해당하지 않습니다." },
  { id: "law-98", subject: "의료관계법규", question: "다음 중 의료법인의 부대사업 시행규칙에 해당하는 사업은?", options: ["숙박업", "도박장 운영업", "금융업", "보험업"], type: "mcq", correctAnswer: 0, explanation: "부대사업 시행규칙에는 숙박업, 편의점·서점, 산후조리업, 목욕장업 등이 포함됩니다." },
  { id: "law-99", subject: "의료관계법규", question: "다음 중 의료법인이 부대사업으로 할 수 없는 것은?", options: ["장례식장 운영", "부설주차장 설치·운영", "건강기능식품", "의료정보시스템 개발·운영사업"], type: "mcq", correctAnswer: 2, explanation: "의료법인은 부대사업으로 건강기능식품 사업을 할 수 없습니다." },
  { id: "law-100", subject: "의료관계법규", question: "다음 중 의료법인의 설립허가를 취소할 수 있는 사유가 아닌 것은?", options: ["정관으로 정하지 않은 사업을 한 경우", "설립된 날부터 2년 안에 의료기관을 개설하지 않은 경우", "의료기관 개설허가를 취소당한 경우", "의료법인이 필요한 자금을 보유하고 있는 경우"], type: "mcq", correctAnswer: 3, explanation: "필요한 자금을 보유하고 있는 것은 설립허가 취소 사유가 아닙니다." },
]

lawQuestions.push(...weekFiveQuestions)

// 6주차 의료기사 등에 관한 법률 문제 (총 17문제)
const weekSixQuestions: Question[] = [
  { id: "law-102", subject: "의료관계법규", question: "「의료기사 등에 관한 법률」의 목적으로 올바르게 짝지어진 것은?", options: ["국민의 건강 / 의료기술 발전", "국민의 보건 / 의료향상", "국민의 복지 / 의료기술 발전", "국민의 안전 / 의료서비스 향상"], type: "mcq", correctAnswer: 1, explanation: "이 법은 의료기사 등의 자격과 면허에 관한 사항을 정하여 국민의 보건과 의료향상에 이바지함을 목적으로 합니다." },
  { id: "law-103", subject: "의료관계법규", question: "다음 중 의료기사에 대한 설명으로 옳은 것은?", options: ["의사의 지도 없이 독립적으로 진료에 종사한다.", "의사의 지도 아래 진료와 의화학적 검사에 종사한다.", "치과의사의 지도 아래 안경을 조제하고 판매한다.", "보건복지부장관의 지도 아래 의료행위를 한다."], type: "mcq", correctAnswer: 1, explanation: "의료기사는 의사의 지도 아래 진료와 의화학적 검사에 종사합니다." },
  { id: "law-104", subject: "의료관계법규", question: "다음 중 물리치료사의 업무로 옳은 것을 모두 고르시오.", options: ["감각·지각·활동 훈련", "기능훈련 및 재활훈련", "기계·기구를 이용한 물리요법적 치료", "삼킴장애 재활치료", "도수치료", "인지 재활치료", "도수근력 및 관절가동범위 검사", "일상생활 훈련", "마사지", "운전 재활훈련", "물리요법적 치료에 필요한 기기·약품의 사용 및 관리", "직업 재활훈련", "신체 교정운동", "작업수행능력 분석 및 평가", "온열·전기·광선·수치료", "작업요법적 치료에 필요한 기기의 사용 및 관리", "물리요법적 교육", "팔보조기 제작 및 팔보조기를 사용한 훈련", "작업요법적 교육"], type: "multi-mcq", correctAnswer: [1, 2, 4, 6, 8, 10, 12, 14, 16], explanation: "물리치료사의 업무는 기능훈련·재활훈련, 물리요법적 치료, 도수치료, 검사, 마사지, 기기·약품의 사용 및 관리, 신체 교정운동, 온열·전기·광선·수치료, 물리요법적 교육 등입니다." },
  { id: "law-105", subject: "의료관계법규", question: "외국의 학교에서 같은 수준 이상의 교육과정을 이수하고 면허를 받은 경우 국내에서도 동일한 자격을 인정받을 수 있다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "외국의 학교에서 같은 수준 이상의 교육과정을 이수한 후 면허를 받은 경우 국내에서도 동일한 자격을 인정받을 수 있습니다." },
  { id: "law-106", subject: "의료관계법규", question: "보건복지부장관은 면허증을 몇 일 이내에 발급해야 하는가?", options: ["7일", "10일", "14일", "30일"], type: "mcq", correctAnswer: 2, explanation: "보건복지부장관은 면허증을 14일 이내에 발급해야 합니다." },
  { id: "law-107", subject: "의료관계법규", question: "다음 중 국가시험에 대한 설명으로 옳은 것은?", options: ["한국보건의료인국가시험원이 국가시험을 실시하고 보건복지부장관이 관리한다.", "보건복지부장관이 국가시험을 실시하며 한국보건의료인국가시험원에 관리를 맡길 수 있다.", "시·도지사가 국가시험을 실시하고 보건복지부장관이 관리한다.", "질병관리청장이 국가시험을 실시하며 한국보건의료인국가시험원이 관리한다."], type: "mcq", correctAnswer: 1, explanation: "국가시험은 보건복지부장관이 실시하며 국가시험원에 관리를 맡길 수 있습니다." },
  { id: "law-108", subject: "의료관계법규", question: "시험장소는 시험일 몇 일 전까지 공고할 수 있는가?", options: ["14", "30", "60", "90"], type: "mcq", correctAnswer: 1, explanation: "시험장소는 시험일 30일 전까지 공고할 수 있습니다." },
  { id: "law-109", subject: "의료관계법규", question: "다음 중 국가시험 응시제한 횟수가 1회인 경우에 해당하는 것은?", options: ["시험 중 의사소통하는 행위", "시험 중 휴대전화를 소지한 행위", "시험장에 늦게 입실한 행위", "시험 전에 시험과목을 확인한 행위"], type: "mcq", correctAnswer: 0, explanation: "부정한 자료를 가지고 있거나 이용한 경우, 시험 중 의사소통하는 행위 등이 국가시험 응시제한 1회에 해당한다." },
  { id: "law-110", subject: "의료관계법규", question: "의료기사 등이 면허를 받은 후 실태와 취업상황을 신고해야 하는 주기와 신고 대상 기관으로 옳은 것은?", options: ["1년마다 / 시·군·구", "2년마다 / 시·도지사", "3년마다 / 보건복지부장관", "5년마다 / 질병관리청장"], type: "mcq", correctAnswer: 2, explanation: "최초 면허 후 3년마다 실태와 취업상황을 보건복지부장관에게 신고해야 합니다." },
  { id: "law-111", subject: "의료관계법규", question: "치과의사 또는 치과기공사는 2개 이상의 치과기공소를 설치할 수 있다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "치과의사 또는 치과기공사는 1개의 치과기공소만 설치할 수 있습니다." },
  { id: "law-112", subject: "의료관계법규", question: "치과기공물 제작의뢰서 몇 년 동안 보존하여야 하는가?", options: ["1년", "2년", "3년", "5년"], type: "mcq", correctAnswer: 1, explanation: "치과기공물 제작의뢰서는 2년 동안 보존해야 합니다." },
  { id: "law-113", subject: "의료관계법규", question: "다음 중 안경업소 개설에 관한 설명으로 옳은 것은?", options: ["안경사가 아니어도 안경업소를 개설할 수 있다.", "안경사는 2개의 안경업소를 개설 할 수 있다.", "안경사가 아니면 안경업소를 개설할 수 없으며, 안경사는 1개의 안경업소만 개설할 수 있다.", "안경사는 안경업소를 개설할 수 없다."], type: "mcq", correctAnswer: 2, explanation: "안경사가 아니면 안경업소를 개설할 수 없으며, 안경사는 1개의 안경업소만 개설할 수 있습니다." },
  { id: "law-114", subject: "의료관계법규", question: "의료기사 등의 보수교육에 대한 설명으로 옳은 것은?", options: ["매년 4시간 이상 교육을 받아야 한다.", "매년 6시간 이상 교육을 받아야 한다.", "매년 8시간 이상 교육을 받아야 한다.", "3년마다 8시간 이상 교육을 받아야 한다."], type: "mcq", correctAnswer: 2, explanation: "보수교육은 매년 8시간 이상 실시합니다." },
  { id: "law-115", subject: "의료관계법규", question: "보건복지부장관이 의료기사 등에 대한 보수교육을 위탁할 수 있는 기관으로 옳지 않은 것은?", options: ["중앙회", "관련 학과가 개설된 전문대학 이상의 학교", "의료기사 등의 업무와 관련된 연구기관", "일반 사기업"], type: "mcq", correctAnswer: 3, explanation: "보수교육은 중앙회, 관련 학교, 업무 관련 연구기관 등에 위탁할 수 있으며 일반 사기업에는 위탁할 수 없습니다." },
  { id: "law-116", subject: "의료관계법규", question: "다음 중 보수교육 면제 대상자에 해당하지 않는 것은?", options: ["대학원에 다니는 사람", "군복무 중이고 해당 업무에 종사하지 않는 의료기사", "해당 연도에 신규 면허를 받은 사람", "보수교육을 정상적으로 이수한 사람"], type: "mcq", correctAnswer: 3, explanation: "대학원생, 해당 연도 신규 면허자 등이 면제 대상이며 보수교육을 이수한 사람은 면제 대상자에 해당하지 않습니다." },
  { id: "law-117", subject: "의료관계법규", question: "보수교육이 유예된 기간에 따른 보수교육 시간으로 옳은 것은?", options: ["1년 유예 8시간 / 2년 유예 12시간 / 3년 유예 16시간", "1년 유예 10시간 / 2년 유예 14시간 / 3년 유예 18시간", "1년 유예 12시간 / 2년 유예 16시간 / 3년 유예 20시간", "1년 유예 16시간 / 2년 유예 20시간 / 3년 유예 24시간"], type: "mcq", correctAnswer: 2, explanation: "1년 유예는 12시간 이상, 2년 유예는 16시간 이상, 3년 유예는 20시간 이상입니다." },
  { id: "law-118", subject: "의료관계법규", question: "보수교육 관계서류의 보존 기간으로 옳은 것은?", options: ["1년", "2년", "3년", "5년"], type: "mcq", correctAnswer: 2, explanation: "보수교육 관계서류는 3년 동안 보관해야 합니다." },
]

lawQuestions.push(...weekSixQuestions)

// 7주차 의료기사 등에 관한 법률 문제 (총 36문제)
const weekSevenQuestions: Question[] = [
  { id: "law-120", subject: "의료관계법규", question: "면허를 반드시 취소해야 하는 경우로 옳은 것은?", options: ["면허를 대여한 경우", "제작의뢰서에 따르지 않고 치과기공물을 제작한 경우", "면허 자격정지 기간에 의료기사 업무를 한 경우", "3회 이상 면허 자격정지 처분을 받은 경우", "피성년후견인 또는 피한정후견인이 된 경우"], type: "mcq", correctAnswer: 4, explanation: "피성년후견인 또는 피한정후견인이 된 경우는 면허를 반드시 취소해야 합니다. 나머지는 면허를 취소할 수 있는 경우입니다." },
  { id: "law-121", subject: "의료관계법규", question: "다음 중 면허를 취소할 수 있는 경우에 해당하는 것을 모두 고르시오.", options: ["면허를 대여한 경우", "제작의뢰서에 따르지 않고 치과기공물을 제작한 경우", "면허 자격정지 기간에 의료기사 업무를 한 경우", "3회 이상 면허 자격정지 처분을 받은 경우"], type: "multi-mcq", correctAnswer: [0, 1, 2, 3], explanation: "위 네 가지는 면허를 취소할 수 있는 사유입니다." },
  { id: "law-122", subject: "의료관계법규", question: "면허를 대여하여 면허가 취소된 사람이 면허증을 재발급받으려는 경우의 조건은?", options: ["취소 후 3개월", "취소 후 6개월과 죄를 뉘우침", "취소 후 1년과 죄를 뉘우침", "취소 후 2년"], type: "mcq", correctAnswer: 2, explanation: "면허 대여로 면허가 취소된 경우에는 1년이 지나고 죄를 뉘우쳐야 재발급받을 수 있습니다." },
  { id: "law-123", subject: "의료관계법규", question: "제작의뢰서를 따르지 않아 면허가 취소된 경우 재발급 조건은?", options: ["3개월이 지나고 죄를 뉘우침", "6개월이 지나고 죄를 뉘우침", "1년이 지나고 죄를 뉘우침", "2년이 지나고 죄를 뉘우침"], type: "mcq", correctAnswer: 1, explanation: "제작의뢰서를 따르지 않아 면허가 취소된 경우에는 6개월이 지나고 죄를 뉘우쳐야 합니다." },
  { id: "law-124", subject: "의료관계법규", question: "면허증 재발급 신청서는 누구에게 제출하는가?", options: [], type: "short-answer", correctAnswer: "보건복지부장관", explanation: "면허증 재발급 신청 서류는 보건복지부장관에게 제출합니다." },
  { id: "law-125", subject: "의료관계법규", question: "면허증 재발급 신청 후 면허증을 갈음할 수 있는 증서는?", options: ["시·도지사의 허가증", "시·군·구청장의 확인서", "보건복지부장관의 접수증", "한국보건의료인국가시험원의 합격증"], type: "mcq", correctAnswer: 2, explanation: "보건복지부장관의 접수증으로 면허증을 갈음할 수 있습니다." },
  { id: "law-126", subject: "의료관계법규", question: "면허증 회수 및 제출 절차의 올바른 순서는?", options: ["시·군·구 통보 → 시·도지사 통보 → 보건복지부장관 통보 → 제출", "보건복지부장관 통보 → 시·도지사 통보 → 시·군·구 회수 → 시·도지사를 거쳐 제출", "시·도지사 통보 → 보건복지부장관 통보 → 회수 → 제출", "회수 → 보건복지부장관 통보 → 시·도지사 통보 → 제출"], type: "mcq", correctAnswer: 1, explanation: "보건복지부장관이 시·도지사에게, 시·도지사가 시·군·구에 통보한 뒤 회수하고 보건복지부장관에게 제출합니다." },
  { id: "law-127", subject: "의료관계법규", question: "시·군·구는 면허증을 회수한 후 시·도지사를 거치지 않고 보건복지부장관에게 바로 제출해야 한다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "회수한 면허증은 시·도지사를 거쳐 보건복지부장관에게 제출해야 합니다." },
  { id: "law-128", subject: "의료관계법규", question: "다음 중 6개월 이내의 기간을 정해 면허 정지가 가능한 것을 모두 고르시오.", options: ["의료기사 등의 품위를 손상시키는 행위", "치과기공소를 개설등록 없이 운영하는 행위 ", "치과기공물 제작의뢰서를 보존하지 않는 행위 ", "치과의사가 제작의뢰서에 따라 제작하는지 확인하려는 것을 거부하는 행위"], type: "multi-mcq", correctAnswer: [0, 1, 2, 3], explanation: "위 네 가지는 6개월 이내의 기간을 정한 면허 자격정지 사유입니다." },
  { id: "law-129", subject: "의료관계법규", question: "자격정지 처분은 5년이 지나면 할 수 없으며, 공소가 제기된 날부터 재판이 끝날 때까지의 기간은 시효기간에 포함한다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "공소가 제기된 날부터 재판이 끝날 때까지의 기간은 시효기간에 포함하지 않습니다." },
  { id: "law-130", subject: "의료관계법규", question: "다음 중 의료기사 등의 품위손상행위에 해당하는 것을 모두 고르시오.", options: ["업무 범위를 벗어나는 행위", "의료인의 지도 없이 업무를 하는 행위", "학문적으로 인정되지 않거나 윤리적으로 허용되지 않는 방법으로 업무를 하는 행위", "검사 결과를 사실과 다르게 기재하는 행위"], type: "multi-mcq", correctAnswer: [0, 1, 2, 3], explanation: "제시된 네 가지는 의료기사 등의 품위손상행위에 해당합니다." },
  { id: "law-131", subject: "의료관계법규", question: "의료기사가 품위손상행위를 한 경우 중앙회는 무엇의 심의를 거쳐 누구에게 자격정지 처분을 요구할 수 있는가?", options: [], type: "short-answer", correctAnswer: "윤리위원회 / 보건복지부장관 / 요구", explanation: "중앙회는 윤리위원회의 심의를 거쳐 보건복지부장관에게 자격정지 처분을 요구할 수 있습니다." },
  { id: "law-132", subject: "의료관계법규", question: "다음 중 보건복지부장관이 시정명령을 할 수 있는 경우는?", options: ["시설 및 장비를 갖추지 못한 경우", "안경사가 콘택트렌즈 부작용 정보를 제공하지 않은 경우", "폐업신고를 하지 않은 경우", "보수교육 수탁기관이 보수교육을 제대로 하지 않은 경우"], type: "mcq", correctAnswer: 3, explanation: "보수교육 수탁기관이 보수교육을 제대로 하지 않는 경우 보건복지부장관은 시정을 명할 수 있습니다." },
  { id: "law-133", subject: "의료관계법규", question: "다음 중 시·군·구청장이 시정명령을 할 수 있는 경우를 모두 고르시오.", options: ["시설 및 장비를 갖추지 못한 경우", "안경사가 콘택트렌즈 부작용 정보를 제공하지 않은 경우", "폐업 또는 등록 변경사항을 신고하지 않은 경우", "보수교육 수탁기관이 보수교육을 제대로 하지 않은 경우"], type: "multi-mcq", correctAnswer: [0, 1, 2], explanation: "시설·장비, 콘택트렌즈 정보 등록 변경사항은 시·군·구의 시정명령 대상입니다." },
  { id: "law-134", subject: "의료관계법규", question: "보건복지부장관 또는 시·군·구가 청문을 해야 하는 처분은?", options: ["면허 발급 / 면허증 재발급", "면허의 취소 / 등의 취소", "자격정지 / 보수교육 유예", "면허증 회수 / 수수료 부과"], type: "mcq", correctAnswer: 1, explanation: "면허 취소와 등록 취소 처분을 하려면 청문을 해야 합니다." },
  { id: "law-135", subject: "의료관계법규", question: "다음 중 수수료 납부 대상인 것을 모두 고르시오.", options: ["의료기사 면허 발급", "면허증 재발급", "국가시험 응시", "직업 보수교육"], type: "multi-mcq", correctAnswer: [0, 1, 2], explanation: "면허 발급, 면허증 재발급, 국가시험 응시는 수수료 납부 대상입니다." },
  { id: "law-136", subject: "의료관계법규", question: "의료기사 면허 없이 의료기사 업무를 한 경우의 벌칙은?", options: [], type: "short-answer", correctAnswer: "3년 이하의 징역 또는 3천만원 이하의 벌금", explanation: "의료기사 면허 없이 업무를 한 경우 제30조에 따라 3년 이하의 징역 또는 3천만원 이하의 벌금에 처합니다." },
  { id: "law-137", subject: "의료관계법규", question: "의료기사 면허를 대여하거나 면허 대여를 알선한 경우의 벌칙은?", options: [], type: "short-answer", correctAnswer: "3년 이하의 징역 또는 3천만원 이하의 벌금", explanation: "면허 대여 및 대여 알선은 3년 이하의 징역 또는 3천만원 이하의 벌금에 처합니다." },
  { id: "law-138", subject: "의료관계법규", question: "업무상 알게 된 환자의 비밀을 누설한 경우의 벌칙은?", options: ["500만원 이하의 벌금", "100만원 이하의 과태료", "3년 이하의 징역 또는 3천만원 이하의 벌금", "500만원 이하의 과태료"], type: "mcq", correctAnswer: 2, explanation: "업무상 알게 된 비밀을 누설하는 행위는 제30조에 해당합니다." },
  { id: "law-139", subject: "의료관계법규", question: "치과기공사가 면허 없이 치과기공소를 개설한 경우의 벌칙은?", options: ["500만원 이하의 벌금", "500만원 이하의 과태료", "100만원 이하의 과태료", "3년 이하의 징역 또는 3천만원 이하의 벌금"], type: "mcq", correctAnswer: 3, explanation: "면허 없이 치과기공소를 개설하는 행위는 제30조에 해당합니다." },
  { id: "law-140", subject: "의료관계법규", question: "치과기공사가 치과의사의 명령에 따르지 않고 치과기공물을 제작한 경우의 벌칙은?", options: ["100만원 이하의 과태료", "500만원 이하의 벌금", "500만원 이하의 과태료", "3년 이하의 징역 또는 3천만원 이하의 벌금"], type: "mcq", correctAnswer: 3, explanation: "치과의사의 명령을 따르지 않고 제작한 경우 제30조의 벌칙이 적용됩니다." },
  { id: "law-141", subject: "의료관계법규", question: "안경사 면허 없이 안경업소를 개설한 경우의 벌칙은?", options: [], type: "short-answer", correctAnswer: "3년 이하의 징역 또는 3천만원 이하의 벌금", explanation: "3년 이하의 징역 또는 3천만원 이하의 벌금" },
  { id: "law-142", subject: "의료관계법규", question: "의료기사 면허 없이 의료기사와 비슷한 명칭을 사용한 경우의 벌칙은?", options: ["500만원 이하의 벌금", "500만원 이하의 과태료", "3천만원 이하의 벌금", "3천만원 이하의 과태료"], type: "mcq", correctAnswer: 0, explanation: "면허 없이 의료기사와 비슷한 명칭을 사용하는 행위는 제31조에 해당합니다." },
  { id: "law-143", subject: "의료관계법규", question: "치과기공사가 2개소 이상의 치과기공소를 개설한 경우의 벌칙은?", options: ["100만원 이하의 과태료", "500만원 이하의 벌금", "500만원 이하의 과태료", "3년 이하의 징역 또는 3천만원 이하의 벌금"], type: "mcq", correctAnswer: 1, explanation: "2개소 이상의 치과기공소를 개설한 경우 500만원 이하의 벌금입니다." },
  { id: "law-144", subject: "의료관계법규", question: "안경사가 2개 이상의 안경업소를 개설한 경우의 벌칙은?", options: [], type: "short-answer", correctAnswer: "500만원 이하의 벌금", explanation: "2개 이상의 안경업소를 개설한 경우 500만원 이하의 벌금입니다." },
  { id: "law-145", subject: "의료관계법규", question: "시·군·구에 등록하지 않고 치과기공소 또는 안경업소를 개설한 경우의 벌칙은?", options: [], type: "short-answer", correctAnswer: "500만원 이하의 벌금", explanation: "등록하지 않고 개설한 경우 제31조의 벌칙에 해당합니다." },
  { id: "law-146", subject: "의료관계법규", question: "영리 목적으로 안경사에게 고객을 알선한 경우의 벌칙은?", options: ["100만원 이하의 과태료", "500만원 이하의 벌금", "500만원 이하의 과태료", "3년 이하의 징역 또는 3천만원 이하의 벌금"], type: "mcq", correctAnswer: 1, explanation: "영리를 목적으로 안경사에게 고객을 알선하는 행위는 제31조에 해당합니다." },
  { id: "law-147", subject: "의료관계법규", question: "온라인 중고거래 플랫폼에서 콘택트렌즈를 판매한 경우의 벌칙은?", options: ["100만원 이하의 과태료", "500만원 이하의 벌금", "500만원 이하의 과태료", "3년 이하의 징역 또는 3천만원 이하의 벌금"], type: "mcq", correctAnswer: 1, explanation: "콘택트렌즈를 사이버상 또는 안경업소 외에서 판매하는 행위는 제31조에 해당합니다." },
  { id: "law-148", subject: "의료관계법규", question: "보수교육 수탁기관이 시정명령을 이행하지 않은 경우의 과태료는?", options: ["100만원 이하의 과태료", "300만원 이하의 과태료", "500만원 이하의 과태료", "3천만원 이하의 벌금"], type: "mcq", correctAnswer: 2, explanation: "보수교육 수탁기관이 시정명령을 이행하지 않으면 500만원 이하의 과태료가 부과됩니다." },
  { id: "law-149", subject: "의료관계법규", question: "실태와 취업상황을 허위로 신고한 경우의 과태료는?", options: ["100만원 이하의 과태료", "500만원 이하의 과태료", "500만원 이하의 벌금", "3년 이하의 징역 또는 3천만원 이하의 벌금"], type: "mcq", correctAnswer: 0, explanation: "실태와 취업상황을 허위로 신고한 경우 100만원 이하의 과태료입니다." },
  { id: "law-150", subject: "의료관계법규", question: "안경업소 운영자가 폐업신고를 하지 않은 경우의 과태료는?", options: ["100만원 이하의 과태료", "500만원 이하의 과태료", "500만원 이하의 벌금", "3천만원 이하의 벌금"], type: "mcq", correctAnswer: 0, explanation: "폐업신고 또는 등록 변경사항 신고를 하지 않으면 100만원 이하의 과태료입니다." },
  { id: "law-151", subject: "의료관계법규", question: "의료기관이 법령에 따른 검사를 보고하지 않은 경우의 과태료는?", options: [], type: "short-answer", correctAnswer: "100만원 이하의 과태료", explanation: "검사를 보고하지 않거나 거부·기피·방해한 경우 100만원 이하의 과태료입니다." },
  { id: "law-152", subject: "의료관계법규", question: "보수교육 수탁기관이 시정명령을 이행하지 않아 과태료를 부과받는 경우 과태료 부권자는 누구인가?", options: [], type: "short-answer", correctAnswer: "보건복지부장관", explanation: "500만원 이하의 과태료는 보건복지부장관이 부과합니다." },
  { id: "law-153", subject: "의료관계법규", question: "실태와 취업상황을 허위로 신고한 경우에는 500만원 이하의 과태료가 부과된다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "실태와 취업상황을 허위로 신고한 경우에는 100만원 이하의 과태료가 부과됩니다." },
  { id: "law-154", subject: "의료관계법규", question: "다음 중 벌칙과 과태료의 연결이 옳은 것은?", options: ["면허 없이 의료기사 업무 — 500만원 이하의 과태료", "의료기사 면허 대여 — 100만원 이하의 과태료", "보수교육 수탁기관의 시정명령 불이행 — 500만원 이하의 과태료", "실태와 취업상황 허위 신고 — 3년 이하의 징역 또는 3천만원 이하의 벌금"], type: "mcq", correctAnswer: 2, explanation: "보수교육 수탁기관이 시정명령을 이행하지 않은 경우 500만원 이하의 과태료가 부과됩니다." },
  { id: "law-155", subject: "의료관계법규", question: "다음 중 옳지 않은 것은?", options: ["면허를 대여한 경우 면허 취소 사유에 해당할 수 있다.", "제작의뢰서를 따르지 않아 면허가 취소된 경우 6개월이 지나고 죄를 뉘우쳐야 재발급받을 수 있다.", "보수교육 수탁기관이 시정명령을 이행하지 않은 경우 100만원 이하의 과태료가 부과된다.", "의료기사 면허 없이 업무를 한 경우 3년 이하의 징역 또는 3천만원 이하의 벌금에 해당한다."], type: "mcq", correctAnswer: 2, explanation: "보수교육 수탁기관의 시정명령 불이행은 500만원 이하의 과태료에 해당합니다." },
]

lawQuestions.push(...weekSevenQuestions)

// 9주차 의료관계법규 문제 (장애인복지법, 총 38문제)
const weekNineQuestions: Question[] = [
  { id: "law-200", subject: "의료관계법규", question: "장애인복지법의 목적으로 옳지 않은 것은?", options: ["장애인의 인간다운 삶과 권리보장을 위한 국가와 지방자치단체의 책임 명확화", "장애 발생 예방", "장애인복지대책의 종합적 추진", "장애인의 생활안정에 기여", "장애인의 사회적 분리와 차별의 제도화"], type: "mcq", correctAnswer: 4, explanation: "장애인복지법은 장애인의 사회통합에 이바지하는 것을 목적으로 합니다." },
  { id: "law-201", subject: "의료관계법규", question: "장애인이란 누구인지 서술하시오.", options: [], type: "short-answer", correctAnswer: "신체적·정신적 장애로 오랫동안 일상생활이나 사회생활에서 상당한 제약을 받는 사람.", explanation: "장애인은 신체적·정신적 장애로 오랫동안 일상생활이나 사회생활에서 상당한 제약을 받는 사람입니다." },
  { id: "law-202", subject: "의료관계법규", question: "다음 중 장애인 학대에 해당하지 않는 것은?", options: ["장애인의 신체에 상해를 입히는 폭력 행위", "장애인에게 정신적 고통을 주는 폭력 행위", "장애인의 감정을 훼손하거나 정서적 고통을 주는 행위", "장애인에게 모욕적인 말을 반복적으로 하는 행위", "장애인에게 성적 수치심이나 피해를 주는 행위", "장애인에게 신체적·정신적 고통을 주는 가혹행위", "장애인의 재산을 부당하게 빼앗거나 이용하는 행위", "장애인을 보호해야 할 의무가 있음에도 버리는 행위", "장애인에게 필요한 보호와 돌봄을 제공하지 않는 행위", "장애인의 의사와 권리를 존중하면서 필요한 돌봄과 일상생활 지원을 제공하는 행위"], type: "mcq", correctAnswer: 9, explanation: "장애인 학대에는 신체적·정신적·정서적·언어적·성적 폭력, 가혹행위, 경제적 착취, 유기 및 방임이 포함됩니다." },
  { id: "law-203", subject: "의료관계법규", question: "다음 중 신체적 장애에 해당하는 것은?", options: ["발달장애", "정신질환", "내부기관의 장애", "학습장애"], type: "mcq", correctAnswer: 2, explanation: "신체적 장애에는 외부 신체 기능의 장애와 내부기관의 장애가 포함됩니다." },
  { id: "law-204", subject: "의료관계법규", question: "다음 중 정신적 장애에 해당하는 것을 모두 고르시오.", options: ["발달장애", "정신질환", "신장장애", "심장장애"], type: "multi-mcq", correctAnswer: [0, 1], explanation: "정신적 장애에는 발달장애와 정신질환이 포함됩니다." },
  { id: "law-205", subject: "의료관계법규", question: "다음 중 장애인의 종류에 해당하지 않는 것은?", options: ["신장장애인", "심장장애인", "호흡기장애인", "간장애인", "안면장애인", "장루·요루장애인", "뇌전증장애인", "췌장장애인", "위장장애인"], type: "mcq", correctAnswer: 8, explanation: "신장장애인, 심장장애인, 호흡기장애인, 간장애인, 안면장애인, 장루·요루장애인, 뇌전증장애인, 췌장장애인이 해당 목록에 포함됩니다." },
  { id: "law-206", subject: "의료관계법규", question: "장애인복지의 기본이념에 해당하는 것을 모두 고르시오.", options: ["완전한 사회참여", "평등", "사회통합", "독립"], type: "multi-mcq", correctAnswer: [0, 1, 2], explanation: "장애인복지의 기본이념은 완전한 사회참여, 평등, 사회통합을 이루는 데 있습니다." },
  { id: "law-207", subject: "의료관계법규", question: "중증장애인은 장애 정도가 심하여 자립하기가 매우 곤란한 장애인을 말한다.", options: ["O", "X"], type: "ox", correctAnswer: 0 },
  { id: "law-208", subject: "의료관계법규", question: "중증장애인에게 필요한 보호 등을 평생 받을 수 있도록 적절한 정책을 강구해야 한다.", options: ["O", "X"], type: "ox", correctAnswer: 0 },
  { id: "law-209", subject: "의료관계법규", question: "보건복지부장관은 중앙행정기관의 장과 협의하여 장애인정책종합계획을 몇 년마다 수립·시행하며, 추진성과는 몇 년마다 평가해야 하는가?", options: [], type: "short-answer", correctAnswer: "종합계획은 5년마다 수립·시행하고, 추진성과는 매년 평가한다." },
  { id: "law-210", subject: "의료관계법규", question: "장애인정책종합계획에 포함되는 사항을 모두 고르시오.", options: ["장애인의 복지", "장애인의 교육문화", "장애인의 경제활동", "장애인의 사회참여", "장애인의 안전관리", "장애인복지시설의 민간 영리화", "장애인의 사회참여 제한"], type: "multi-mcq", correctAnswer: [0, 1, 2, 3, 4], explanation: "장애인정책종합계획에는 장애인의 복지, 교육문화, 경제활동, 사회참여 및 안전관리에 관한 사항이 포함됩니다." },
  { id: "law-211", subject: "의료관계법규", question: "중앙행정기관의 장은 장애인정책종합계획에 따른 사업계획을 몇 년마다 수립·시행하며, 누구에게 제출해야 하는가?", options: [], type: "short-answer", correctAnswer: "매년 수립·시행하며, 보건복지부장관에게 제출한다." },
  { id: "law-212", subject: "의료관계법규", question: "장애인정책종합계획에 관한 필요한 사항은 누가 정하는가?", options: [], type: "short-answer", correctAnswer: "대통령령" },
  { id: "law-213", subject: "의료관계법규", question: "보건복지부장관은 장애인정책종합계획의 추진성과 평가를 확정한 때 누구에게 보고해야 하는가?", options: [], type: "short-answer", correctAnswer: "국회 소관 상임위원회" },
  { id: "law-214", subject: "의료관계법규", question: "장애인정책조정위원회는 어디에 소속되는가?", options: [], type: "short-answer", correctAnswer: "국무총리 소속" },
  { id: "law-215", subject: "의료관계법규", question: "장애인정책조정위원회의 위원장과 부위원장을 올바르게 짝지은 것은?", options: ["위원장: 대통령 / 부위원장: 국무총리", "위원장: 국무총리 / 부위원장: 보건복지부장관", "위원장: 보건복지부장관 / 부위원장: 국무총리", "위원장: 보건복지부장관 / 부위원장: 행정안전부장관"], type: "mcq", correctAnswer: 1 },
  { id: "law-216", subject: "의료관계법규", question: "장애인정책조정위원회의 구성에 관한 설명으로 옳지 않은 것은?", options: ["위원장은 국무총리이다.", "부위원장은 보건복지부장관이다.", "위촉위원의 2분의 1 이상은 장애인이어야 한다.", "당연직 위원은 중앙행정기관의 장이 된다.", "위촉위원의 2분의 1 이상은 일반인이어야 한다."], type: "mcq", correctAnswer: 4, explanation: "위촉위원의 2분의 1 이상은 장애인이어야 합니다." },
  { id: "law-217", subject: "의료관계법규", question: "장애인의 날과 장애인 주간에 대한 설명으로 옳은 것은?", options: ["장애인의 날은 3월 20일이며, 3일간을 장애인 주간으로 한다.", "장애인의 날은 4월 20일이며, 그로부터 1주일간을 장애인 주간으로 한다.", "장애인의 날은 5월 5일이며, 그로부터 1주일간을 장애인 주간으로 한다.", "장애인의 날은 4월 20일이며, 그다음 달 전체를 장애인 주간으로 한다"], type: "mcq", correctAnswer: 1 },
  { id: "law-218", subject: "의료관계법규", question: "장애인실태조사를 실시하는 주체와 주기를 올바르게 짝지은 것은?", options: ["보건복지부장관 / 매년", "시·도지사 / 2년마다", "보건복지부장관 / 3년마다", "국무총리 / 5년마다"], type: "mcq", correctAnswer: 2 },
  { id: "law-219", subject: "의료관계법규", question: "장애인실태조사에 관한 필요한 사항은 누가 정하는가?", options: [], type: "short-answer", correctAnswer: "대통령령" },
  { id: "law-220", subject: "의료관계법규", question: "전수조사와 표본조사의 담당 주체로 올바르게 짝지어진 것은?", options: ["전수조사: 보건복지부장관 / 표본조사: 시·도지사", "전수조사: 시·도지사 / 표본조사: 보건복지부장관", "전수조사: 시장·군수·구청장 / 표본조사: 시·도지사", "전수조사: 시·도지사 / 표본조사: 보건복지부장관이 전문연구기관에 위탁", "전수조사: 보건복지부장관이 전문연구기관에 위탁 / 표본조사: 시장·군수·구청장"], type: "mcq", correctAnswer: 3, explanation: "전수조사는 시·도지사가 실시하고, 표본조사는 보건복지부장관이 전문연구기관에 위탁하여 실시합니다." },
  { id: "law-221", subject: "의료관계법규", question: "표본조사는 시·도지사가 직접 실시하고, 전수조사는 보건복지부장관이 전문연구기관에 위탁한다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "전수조사는 시·도지사가 실시하고, 표본조사는 보건복지부장관은 전문연구기관에 위탁합니다." },
  { id: "law-222", subject: "의료관계법규", question: "장애인 등록증은 누구에게 신청해야 하는가?", options: [], type: "short-answer", correctAnswer: "특별자치도지사·시장·군수·구청장" },
  { id: "law-223", subject: "의료관계법규", question: "장애정도에 관한 정밀심사를 의뢰할 수 있는 공공기관은 어디인가?", options: [], type: "short-answer", correctAnswer: "국민연금공단" },
  { id: "law-224", subject: "의료관계법규", question: "장애인 등록증에 관한 설명으로 옳지 않은 것은?", options: ["장애인 등록은 관할 등록기관에 신청한다.", "등록 기준에 맞으면 장애인 등록증을 발급해야 한다.", "장애인 등록증은 다른 사람에게 양도할 수 있다.", "장애인 등록증과 동일한 효력의 모바일 등록증을 받을 수 있다.", "장애정도에 관한 정밀심사를 의뢰할 수 있다."], type: "mcq", correctAnswer: 2, explanation: "장애인 등록증은 다른 사람에게 양도할 수 없습니다." },
  { id: "law-225", subject: "의료관계법규", question: "장애인 보호자의 범위에 해당하는 것으로 옳은 것은?", options: ["장애인을 사실상 보호하고 있는 사람", "장애인의 가족", "장애인을 일시적으로 목격한 사람", "장애인의 형제"], type: "mcq", correctAnswer: 0, explanation: "장애인 보호자의 범위에는 장애복지시설의 장과 장애인을 사실상 보호하고 있는 사람이 포함됩니다." },
  { id: "law-226", subject: "의료관계법규", question: "다음 중 외국인임에도 장애인 등록이 가능한 경우에 해당하지 않는 것은?", options: ["국내거소신고를 한 사람", "재외국민으로 주민등록을 한 사람", "체류자격을 가진 사람", "결혼이민자", "난민인정자", "국내에서 1년 정도 거주한 외국인"], type: "mcq", correctAnswer: 5, explanation: "국내에서 1년 정도 거주했다는 사실만으로 장애인 등록 자격이 인정되는 것은 아닙니다." },
  { id: "law-227", subject: "의료관계법규", question: "외국인 장애인에 대해서는 예산 등을 고려하여 지원을 제한할 수 없다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "외국인 장애인에 대한 지원은 예산 등을 고려하여 제한할 수 있습니다." },
  { id: "law-228", subject: "의료관계법규", question: "서비스 지원 종합조사를 실시할 수 있는 주체가 아닌 것은?", options: ["보건복지부장관", "특별자치시장", "특별자치도지사", "시장·군수·구청장", "장애인복지시설의 장"], type: "mcq", correctAnswer: 4, explanation: "서비스 지원 종합조사는 보건복지부장관, 특별자치시장, 특별자치도지사, 시장·군수·구청장이 실시할 수 있습니다." },
  { id: "law-229", subject: "의료관계법규", question: "서비스 지원 종합조사 시 신청인과 부양의무자의 소득 및 재산 등 생활수준에 관한 사항은 어떤 경우에 조사해야 하는가?", options: [], type: "short-answer", correctAnswer: "본인부담금 산정 등을 위해 필요한 경우에만 조사해야 한다." },
  { id: "law-230", subject: "의료관계법규", question: "다음 중 서비스 지원 신청 항목이 아닌 것은?", options: ["활동지원급여", "장애인 보조기기 교부 신청", "장애인 거주시설 이용 신청", "자동차 등에 대한 지원", "장애인 사용 자동차 등 표지의 발급", "활동지원 응급안전서비스", "주간활동서비스", "운전면허시험 응시료 전액 지원"], type: "mcq", correctAnswer: 7, explanation: "서비스 지원 신청 항목에는 활동지원급여, 장애인 보조기기 교부, 장애인 거주시설 이용, 자동차 등에 대한 지원, 장애인 사용 자동차 등 표지 발급, 활동지원 응급안전서비스 및 주간활동서비스가 포함됩니다." },
  { id: "law-231", subject: "의료관계법규", question: "서비스 지원 종합업무를 위탁받는 기관은 어디인가?", options: [], type: "short-answer", correctAnswer: "한국장애인개발원" },
  { id: "law-232", subject: "의료관계법규", question: "장애인복지상담원은 어디에 두는가?", options: [], type: "short-answer", correctAnswer: "시·군·구" },
  { id: "law-233", subject: "의료관계법규", question: "다음 중 장애인복지상담원으로 임용될 수 있는 자격 또는 경력에 해당하지 않는 것은?", options: ["사회복지사 자격증 소지", "특수학교 교사자격증 소지", "장애인복지 관련 분야에 3년 이상 근무한 경력", "임용 예정 직급과 같은 직급으로 공무원으로 2년 이상 근무한 사람", "복지와 관련된 일을 3년간 해본 경력이 있는 사람"], type: "mcq", correctAnswer: 4, explanation: "임용 자격에는 장애인복지 관련 분야에서 3년 이상 근무한 경력이 포함되며, 일반적인 복지 관련 업무 경력만으로는 해당 요건을 충족한다고 볼 수 없습니다." },
  { id: "law-234", subject: "의료관계법규", question: "자녀교육비 지급이 가능한 경우로 옳은 것은?", options: ["장애인이 부양하는 자녀와 장애인인 자녀", "장애인과 관계없는 모든 사람의 자녀", "장애인복지시설 종사자의 자녀만", "장애인과 함께 거주하는 이웃의 자녀만"], type: "mcq", correctAnswer: 0, explanation: "자녀교육비 지급 대상에는 장애인이 부양하는 자녀와 장애인인 자녀가 포함됩니다." },
  { id: "law-235", subject: "의료관계법규", question: "다음 설명과 해당 내용을 올바르게 연결하시오.", options: ["장애인정책종합계획 수립 주기", "장애인실태조사 주기", "중앙행정기관의 사업계획 수립 주기", "장애인정책종합계획 추진성과 평가 주기"], type: "matching", correctAnswer: "1) 5년마다 / 2) 3년마다 / 3) 매년 / 4) 매년" },
  { id: "law-236", subject: "의료관계법규", question: "다음 중 장애인복지법 관련 기관 및 역할의 연결이 옳지 않은 것은?", options: ["장애인정책조정위원회 — 국무총리 소속", "장애인복지상담원 — 시·군·구에 설치", "장애정도 정밀심사 의뢰 기관 — 국민연금공단", "서비스 지원 종합업무 위탁 기관 — 한국장애인개발원", "장애인실태조사에 관한 필요한 사항 — 국회 소관 상임위원회"], type: "mcq", correctAnswer: 4, explanation: "장애인실태조사에 관한 필요한 사항은 대통령령으로 정합니다." },
  { id: "law-237", subject: "의료관계법규", question: "다음 중 옳은 설명을 모두 고르시오.", options: ["장애인복지의 기본이념에는 완전한 사회참여가 포함된다.", "장애인정책조정위원회의 위원장은 국무총리이다.", "장애인의 날은 4월 20일이다.", "장애인 등록증은 양도할 수 있다."], type: "multi-mcq", correctAnswer: [0, 1, 2], explanation: "장애인 등록증은 다른 사람에게 양도할 수 없습니다." },
]

  lawQuestions.push(...weekNineQuestions)

  // 10주차 의료관계법규 문제 (장애인복지법, 총 39문제)
  const weekTenQuestions: Question[] = [
    { id: "law-238", subject: "의료관계법규", question: "다음 중 장애인 사용 자동차 등 표지를 발급하는 자로 옳은 것은?", options: [], type: "short-answer", correctAnswer: "시·군·구", explanation: "장애인 사용 자동차 등 표지는 시·군·구에서 발급합니다." },
    { id: "law-239", subject: "의료관계법규", question: "다음 중 장애인과 같이 살지만, 자동차 표지 발급 대상자에 해당하지 않는 것은?", options: ["배우자", "직계존·비속", "직계비속의 배우자", "형제·자매의 자녀", "가까운 지인"], type: "mcq", correctAnswer: 4, explanation: "가까운 지인은 자동차 표지 발급 대상자에 포함되지 않습니다." },
    { id: "law-240", subject: "의료관계법규", question: "사무보조기기 구입비용은 자금대여가 가능한가?", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "사무보조기기 구입비용은 자금대여가 가능합니다." },
    { id: "law-241", subject: "의료관계법규", question: "다음 중 장애인의 생업지원에 대한 설명으로 틀린 것은?", options: ["장애인이 신청하면 매점 설치 허가를 우선적으로 반영해야 한다.", "장애인이 신청하면 자동판매기 설치 허가를 우선적으로 반영해야 한다.", "담배소매인 지정은 장애인에게 우선적으로 해주어야 한다.", "우표류 판매업도 장애인에게 우선적으로 지원해야 한다.", "특별한 사유가 없어도 반드시 다른 사람에게 운영을 맡겨야 한다."], type: "mcq", correctAnswer: 4, explanation: "특별한 사유가 없다면 장애인이 직접 운영해야 합니다." },
    { id: "law-242", subject: "의료관계법규", question: "장애수당을 지급하는 주체는 누구인가?", options: [], type: "short-answer", correctAnswer: "국가 및 지방자치단체", explanation: "국가와 지방자치단체는 장애수당을 지급할 수 있습니다." },
    { id: "law-243", subject: "의료관계법규", question: "장애수당을 지급하는 목적으로 옳은 것은?", options: ["장애인의 취업 기회를 확대하기 위해", "장애로 인한 추가적인 비용을 보전하기 위해", "장애인의 의료기관 이용을 제한하기 위해", "장애인복지시설의 운영비를 지원하기 위해"], type: "mcq", correctAnswer: 1, explanation: "장애수당은 장애로 인한 추가적인 비용을 보전하기 위해 지급합니다." },
    { id: "law-244", subject: "의료관계법규", question: "생계급여 또는 의료급여를 받는 장애인에게는 장애수당을 반드시 지급해야 한다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "생계급여 또는 의료급여를 받는 장애인에게는 장애수당을 반드시 지급해야 합니다." },
    { id: "law-245", subject: "의료관계법규", question: "다음 중 장애수당 지급 대상과 관련한 설명으로 옳지 않은 것은?", options: ["장애인의 장애 정도를 고려한다.", "장애인의 경제적 수준을 고려한다.", "장애로 인한 추가적인 비용을 보전하기 위해 지급한다.", "중증장애인에게도 장애수당을 지급한다."], type: "mcq", correctAnswer: 3, explanation: "중증장애인에게는 장애수당을 지급하지 않습니다." },
    { id: "law-246", subject: "의료관계법규", question: "장애아동수당의 조건으로 옳지 않은 것은?", options: ["18세 미만이어야 한다.", "장애인으로 등록되어 있어야 한다.", "수급자 또는 차상위계층이어야 한다.", "18세 이상이어야 한다."], type: "mcq", correctAnswer: 3, explanation: "장애아동수당의 조건은 18세 미만, 장애인 등록, 수급자 또는 차상위계층입니다." },
    { id: "law-247", subject: "의료관계법규", question: "보호수당의 조건으로 옳지 않은 것은?", options: ["수급자에 해당해야 한다.", "중증장애로 인해 다른 사람의 도움 없이는 생활하기 어려운 경우이다.", "18세 이상이어야 한다.", "경증장애로 약간 생활에 지장가는 경우"], type: "mcq", correctAnswer: 3, explanation: "보호수당은 중증장애로 인해 다른 사람의 도움 없이는 생활하기 어려운 경우와 관련됩니다." },
    { id: "law-248", subject: "의료관계법규", question: "국가와 지방자치단체가 장애아동에게 보호자의 경제적 생활수준과 장애아동의 장애 정도를 고려하여 장애로 인한 추가적인 비용을 보전하기 위해 지급하는 수당은?", options: [], type: "short-answer", correctAnswer: "장애수당", explanation: "장애아동에게 지급하는 수당은 장애수당입니다. 키워드: 장애아동에게." },
    { id: "law-249", subject: "의료관계법규", question: "보호수당의 지급 목적에 대한 설명으로 옳은 것은?", options: ["장애아동에게 경제적 상태와 장애정도를 고려해 장애로 인한 추가적인 비용을 보전하기 위해 지급", "장애인 보호자의 경제적 상태와 장애정도를 고려해 장애로 인한 추가적인 비용을 보전하기 위해 지급한다.", "장애인의 경제적 상태와 장애정도를 고려해 장애로 인한 추가적인 비용을 보전하기 위해 지급한다", "장애인의 자동차 구입비용만을 지원하기 위해 지급한다."], type: "mcq", correctAnswer: 1, explanation: "보호수당은 장애인 보호자에게 지급합니다. 키워드: 장애인 보호자." },
    { id: "law-250", subject: "의료관계법규", question: "장애수당의 지급자와 신청 장소를 올바르게 짝지은 것은?", options: ["국가 / 시·군·구", "시·군·구 / 국가", "보건복지부장관 / 국민연금공단", "국민연금공단 / 시·도지사"], type: "mcq", correctAnswer: 0, explanation: "장애수당의 지급자는 국가이며, 신청하는 곳은 시·군·구입니다." },
    { id: "law-251", subject: "의료관계법규", question: "장애인복지급여수급계좌에 입금할 수 있는 급여로 옳은 것은?", options: ["급여 / 장애수당", "자녀교육비 / 장애수당", "연금 / 월급", "모든 종류의 개인 소득"], type: "mcq", correctAnswer: 1, explanation: "장애인복지급여수급계좌에는 자녀교육비와 장애수당만 입금되어야 합니다." },
    { id: "law-252", subject: "의료관계법규", question: "장애인복지급여수급계좌에 개인의 월급이 입금되어도 괜찮다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "장애인복지급여수급계좌에는 자녀교육비와 장애수당만 입금되어야 합니다." },
    { id: "law-253", subject: "의료관계법규", question: "국가·지방자치단체는 장애인복지시설 이용을 통해 ( )과 ( )이 가능하게 ( )을 강구해야 한다.", options: ["기능회복", "사회적 향상", "필요한 정책"], type: "matching", correctAnswer: "기능회복 / 사회적 향상 / 필요한 정책", explanation: "국가와 지방자치단체는 장애인복지시설 이용을 통해 기능회복과 사회적 향상이 가능하도록 필요한 정책을 강구해야 합니다." },
    { id: "law-254", subject: "의료관계법규", question: "장애인의 선택권 보장을 위해 장애인복지시설에 대한 정보를 충분히 제공해야 한다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "국가와 지방자치단체는 장애인의 시설 선택권을 최대한 보장하고 필요한 정보를 충분히 제공해야 합니다." },
    { id: "law-255", subject: "의료관계법규", question: "다음 중 장애인복지시설의 종류와 설명이 올바르게 연결된 것은?", options: ["장애인 거주시설 - 장애인의 직업훈련만을 제공하는 시설", "장애인 지역사회재활시설 - 상담, 치료, 훈련 및 일상생활과 여가활동을 지원하는 시설", "장애인 자립생활지원시설 - 장애인을 입원시켜 의료재활서비스를 제공하는 시설", "장애인 직업재활시설 - 장애인의 거주공간을 제공하는 시설", "장애인 의료재활시설 - 장애인의 권익 옹호와 동료상담만을 제공하는 시설"], type: "mcq", correctAnswer: 1, explanation: "장애인 지역사회재활시설은 상담, 치료, 훈련과 일상생활 및 여가활동 등을 지원하는 시설입니다." },
    { id: "law-256", subject: "의료관계법규", question: "거주공간을 활용하여 서비스를 제공하고 지역사회생활을 지원하는 시설은 무엇인가?", options: [], type: "short-answer", correctAnswer: "장애인 거주시설" },
    { id: "law-257", subject: "의료관계법규", question: "장애인을 상담, 치료, 훈련하거나 일상생활 및 여가활동을 지원하는 시설은 무엇인가?", options: [], type: "short-answer", correctAnswer: "장애인 지역사회재활시설", explanation: "키워드: 상담, 치료, 훈련, 여가활동 지원." },
    { id: "law-258", subject: "의료관계법규", question: "자립생활 역량 강화를 위해 동료상담과 장애인의 권익 옹호 및 증진을 지원하는 시설은 무엇인가?", options: [], type: "short-answer", correctAnswer: "장애인 자립생활지원시설", explanation: "키워드: 동료상담." },
    { id: "law-259", subject: "의료관계법규", question: "일하기 어려운 장애인이 특별히 준비된 작업환경에서 직업훈련을 받거나 직업생활을 할 수 있도록 지원하는 시설은 무엇인가?", options: [], type: "short-answer", correctAnswer: "장애인 직업재활시설" },
    { id: "law-260", subject: "의료관계법규", question: "장애인을 입원 또는 통원시켜 의료재활서비스를 제공하는 시설은 무엇인가?", options: [], type: "short-answer", correctAnswer: "장애인 의료재활시설" },
    { id: "law-261", subject: "의료관계법규", question: "다음 중 장애인복지시설에 해당하지 않는 것은?", options: ["피해장애아동쉼터", "장애인생산품 판매시설", "장애인 쉼터", "노인요양시설"], type: "mcq", correctAnswer: 3, explanation: "노인요양시설은 장애인복지시설에 해당하지 않습니다." },
    { id: "law-262", subject: "의료관계법규", question: "장애인복지시설을 설치할 수 있는 자에 대한 설명으로 옳은 것은?", options: ["국가와 지방자치단체만 설치할 수 있다.", "국가와 지방자치단체 외의 자는 설치할 수 없다.", "국가와 지방자치단체는 설치할 수 있으며, 그 외의 자는 시·군·구에 신고해야 한다.", "누구든지 별도의 신고 없이 설치할 수 있다."], type: "mcq", correctAnswer: 2, explanation: "국가와 지방자치단체는 설치할 수 있으며, 그 외의 자가 설치하려면 시·군·구에 신고해야 합니다." },
    { id: "law-263", subject: "의료관계법규", question: "장애인복지시설 폐쇄명령을 받은 자는 몇 년이 지나야 시설 설치 신고가 가능한가?", options: [], type: "short-answer", correctAnswer: "1년", explanation: "폐쇄명령을 받은 후 1년이 지나지 않으면 신고할 수 없습니다." },
    { id: "law-264", subject: "의료관계법규", question: "장애인 거주시설의 정원은 원칙적으로 몇 명을 초과할 수 없는가?", options: ["10명", "20명", "30명", "50명"], type: "mcq", correctAnswer: 2, explanation: "장애인 거주시설의 정원은 원칙적으로 30명을 초과할 수 없습니다." },
    { id: "law-265", subject: "의료관계법규", question: "장애인 의료재활시설의 설치는 어떤 법을 따르는가?", options: ["노인복지법", "의료기사법", "장애인복지법", "의료법"], type: "mcq", correctAnswer: 3, explanation: "장애인 의료재활시설의 설치는 의료법에 따릅니다." },
    { id: "law-266", subject: "의료관계법규", question: "장애인복지시설의 신고 및 변경신고에 필요한 사항은 무엇으로 정하는가?", options: ["시·도지사", "시·군·구", "대통령", "보건복지부령"], type: "mcq", correctAnswer: 3, explanation: "장애인복지시설의 신고 및 변경신고에 필요한 사항은 보건복지부령으로 정합니다." },
    { id: "law-267", subject: "의료관계법규", question: "장애인학대관련범죄로 형을 선고받은 사람에게 일정 기간 장애인 관련 기관에 취업하거나 노무를 제공할 수 없도록 하는 명령은 무엇인가?", options: [], type: "short-answer", correctAnswer: "취업제한명령", explanation: "취업제한명령은 일정 기간 장애인 관련 기관에 취업하거나 노무를 제공하지 못하도록 하는 명령입니다." },
    { id: "law-268", subject: "의료관계법규", question: "장애인 관련 기관에 대한 취업제한기간은 10년을 초과할 수 없다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "취업제한기간은 10년을 넘지 못합니다." },
    { id: "law-269", subject: "의료관계법규", question: "장애인 관련 기관을 운영하려는 자에 대해 범죄경력조회를 요청할 때 동의를 받아야 하는가?", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "관할행정기관장은 동의를 받아 범죄 등 경력조회를 요청해야 합니다." },
    { id: "law-270", subject: "의료관계법규", question: "취업제한명령을 받은 사람이 장애인 관련 업계에 종사하는지 확인하고 점검하는 주체와 주기를 올바르게 짝지은 것은?", options: ["보건복지부장관 / 1년에 1회", "관할행정기관장 / 1년에 1회 이상", "시·군·구청장 / 2년에 1회", "국민연금공단 / 1년에 2회"], type: "mcq", correctAnswer: 1, explanation: "관할행정기관장은 1년에 1회 이상 확인하고 점검해야 합니다." },
    { id: "law-271", subject: "의료관계법규", question: "관할행정기관장에게 매년 점검결과를 제출하도록 요청할 수 있는 자는?", options: ["보건복지부장관", "대통령", "시장", "시·도지사"], type: "mcq", correctAnswer: 0, explanation: "보건복지부장관은 매년 점검결과를 제출하도록 요청할 수 있습니다." },
    { id: "law-272", subject: "의료관계법규", question: "다음 중 장애인 관련 기관에 해당하지 않는 것은?", options: ["노인복지시설", "장기요양기관", "아동복지시설", "특수교육기관 및 특수교육지원센터", "노인쉼터"], type: "mcq", correctAnswer: 4, explanation: "노인쉼터는 장애인 관련 기관에 해당하지 않습니다." },
    { id: "law-273", subject: "의료관계법규", question: "교통약자 이동지원센터는 장애인 관련 기관에 해당한다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "교통약자 이동지원센터는 장애인 관련 기관에 포함됩니다." },
    { id: "law-274", subject: "의료관계법규", question: "정신건강복지센터와 정신건강증진시설은 장애인 관련 기관에 해당하지 않는다.", options: ["O", "X"], type: "ox", correctAnswer: 1, explanation: "정신건강복지센터와 정신건강증진시설은 장애인 관련 기관에 포함됩니다." },
    { id: "law-275", subject: "의료관계법규", question: "장애인학대 신고의무자에 해당하는 사람으로 옳지 않은 것은?", options: ["의료기관의 장", "물리치료사", "서비스 지원 종합조사를 하는 사람", "일반시민"], type: "mcq", correctAnswer: 3 },
    { id: "law-276", subject: "의료관계법규", question: "장애인학대 신고의무와 관련하여 서비스 지원 종합조사를 담당하는 기관은 어디인가?", options: [], type: "short-answer", correctAnswer: "국민연금공단", explanation: "서비스 지원 종합조사를 하는 자는 국민연금공단과 관련됩니다." },
  ]

  const weekElevenQuestions: Question[] = [
    { id: "law-277", subject: "의료관계법규", question: "장애학대관련범죄의 심리에서 보조인이 될 수 있는 사람은?", options: ["변호사만", "상담원과 변호사", "법원 직원만", "장애인 본인만"], type: "mcq", correctAnswer: 1, explanation: "상담원과 변호사가 보조인이 될 수 있으며, 변호사가 아닌 사람은 법원의 허가가 필요합니다." },
    { id: "law-278", subject: "의료관계법규", question: "변호사가 아닌 사람이 장애학대관련범죄의 심리에서 보조인이 되려면 법원의 허가가 필요하다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "변호사가 아닌 상담원 등이 보조인이 되려면 법원의 허가가 필요합니다." },
    { id: "law-279", subject: "의료관계법규", question: "장애인을 증인으로 신문할 때 신뢰관계에 있는 사람의 동석을 허가할 수 있다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "장애인의 증인신문에서는 신뢰관계에 있는 사람의 동석을 허가할 수 있습니다." },
    { id: "law-280", subject: "의료관계법규", question: "장애인쉼터와 피해장애아동쉼터를 설치·운영하는 기관은?", options: [], type: "short-answer", correctAnswer: "특별시장, 광역시장, 특별자치시장, 도지사, 특별자치도지사", explanation: "각 지방자치단체의 장이 장애인쉼터와 피해장애아동쉼터를 설치·운영합니다." },
    { id: "law-281", subject: "의료관계법규", question: "사법경찰관이 장애인학대를 의심할 사유가 있으면 통보해야 하는 기관은?", options: ["국민연금공단", "장애인권익옹호기관", "보건복지부", "시·군·구청"], type: "mcq", correctAnswer: 1, explanation: "장애인권익옹호기관에 그 사실을 통보해야 합니다." },
    { id: "law-282", subject: "의료관계법규", question: "장애인권익옹호기관의 성과평가를 실시하는 주체는?", options: [], type: "short-answer", correctAnswer: "보건복지부장관", explanation: "보건복지부장관은 장애인권익옹호기관을 3년마다 평가합니다." },
    { id: "law-283", subject: "의료관계법규", question: "장애인권익옹호기관의 성과평가는 몇 년마다 실시하는가?", options: ["매년", "2년마다", "3년마다", "5년마다"], type: "mcq", correctAnswer: 2, explanation: "보건복지부장관이 3년마다 실시합니다." },
    { id: "law-284", subject: "의료관계법규", question: "장애인학대보도에 대한 권고기준을 수립하는 자는?", options: ["시·도지사", "보건복지부장관", "국민연금공단 이사장", "장애인권익옹호기관장"], type: "mcq", correctAnswer: 1, explanation: "보건복지부장관이 권고기준을 수립합니다." },
    { id: "law-285", subject: "의료관계법규", question: "장애인학대정보시스템을 구축하고 운영하는 자는?", options: [], type: "short-answer", correctAnswer: "보건복지부장관", explanation: "장애인학대정보시스템은 보건복지부장관이 구축·운영합니다." },
    { id: "law-286", subject: "의료관계법규", question: "장애인복지시설 운영 개시에 대한 설명으로 틀린 것은?", options: ["신고자는 지체 없이 운영을 시작해야 한다.", "중단하려면 시·군·구에 신고한다.", "재개하려면 시·군·구에 신고한다.", "폐지하려면 시·군·구에 신고한다.", "재개 시 운영계획은 필요하지 않다."], type: "mcq", correctAnswer: 4, explanation: "재개 시에는 중단 사유의 해소와 향후 안정적인 운영계획을 확인해야 합니다." },
    { id: "law-287", subject: "의료관계법규", question: "장애인복지시설 운영 재개 시 확인할 사항 두 가지는?", options: [], type: "short-answer", correctAnswer: "운영 중단 사유의 해소, 향후 안정적 운영계획의 수립", explanation: "운영 중단 사유의 해소와 향후 안정적 운영계획의 수립을 확인합니다." },
    { id: "law-288", subject: "의료관계법규", question: "장애인 거주시설의 서비스 최저기준을 마련하는 주체는?", options: ["시·군·구청장", "보건복지부장관", "시설 운영자", "국민연금공단"], type: "mcq", correctAnswer: 1, explanation: "보건복지부장관이 서비스 최저기준을 마련합니다." },
    { id: "law-289", subject: "의료관계법규", question: "장애인복지시설 폐쇄 사유에 해당하지 않는 것은?", options: ["시설 기준 미달", "보고 불이행 또는 조사 기피", "설립허가 취소", "서비스 최저기준 미유지", "시설 이용자 만족도 저하"], type: "mcq", correctAnswer: 4, explanation: "시설 이용자 만족도 저하는 제시된 폐쇄 사유가 아닙니다." },
    { id: "law-290", subject: "의료관계법규", question: "장애인복지시설 폐쇄 사유로 옳지 않은 것은?", options: ["시설 기준 미달", "성폭력범죄 발생", "설치 목적 달성", "설치 목적 미달성"], type: "mcq", correctAnswer: 3, explanation: "설치 목적을 이루었을 때는 폐쇄 사유지만 이루지 못한 때는 해당하지 않습니다." },
    { id: "law-291", subject: "의료관계법규", question: "장애인복지시설 이용자에 대한 성교육을 실시하는 자는?", options: [], type: "short-answer", correctAnswer: "시설 운영자", explanation: "시설 운영자가 이용자에 대한 성교육을 실시합니다." },
    { id: "law-292", subject: "의료관계법규", question: "중앙수어통역센터를 설치·운영하는 자는?", options: [], type: "short-answer", correctAnswer: "보건복지부장관", explanation: "보건복지부장관이 중앙수어통역센터를 설치·운영합니다." },
    { id: "law-293", subject: "의료관계법규", question: "노인복지법의 목적으로 옳은 것은?", options: ["질환을 사전예방하고 조기발견하며 심신의 건강과 노후 생활안정에 기여", "노인의 경제활동만 지원", "노인시설만 확충", "의료비만 지원"], type: "mcq", correctAnswer: 0, explanation: "노인복지법은 질환 예방·발견과 치료·요양을 통해 심신의 건강과 노후 생활안정을 도모합니다." },
    { id: "law-294", subject: "의료관계법규", question: "부양의무자에 해당하는 사람은?", options: ["배우자, 직계비속 및 그 배우자", "형제자매와 친구", "직계존속과 이웃", "모든 친척과 지인"], type: "mcq", correctAnswer: 0, explanation: "부양의무자는 배우자, 직계비속 및 그 배우자이며 사실혼 배우자도 포함됩니다." },
    { id: "law-295", subject: "의료관계법규", question: "사실혼 관계의 배우자도 부양의무자에 포함된다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "사실혼 관계의 배우자도 부양의무자에 포함됩니다." },
    { id: "law-296", subject: "의료관계법규", question: "부양의무자 또는 고용 관계로 사실상 노인을 보호하는 자는?", options: [], type: "short-answer", correctAnswer: "보호자", explanation: "부양의무자 또는 고용 등의 관계로 사실상 노인을 보호하는 사람을 보호자라고 합니다." },
    { id: "law-297", subject: "의료관계법규", question: "노인학대에 해당하지 않는 것은?", options: ["신체적 폭력", "정서적·정신적 폭력", "성적 폭력", "경제적 착취", "공부"], type: "mcq", correctAnswer: 4, explanation: "노인학대에는 폭력, 경제적 착취, 가혹행위, 유기 및 방임 등이 포함됩니다." },
    { id: "law-298", subject: "의료관계법규", question: "노인학대의 유형으로 옳지 않은 것은?", options: ["경제적 착취", "유기", "방임", "일상생활 지원"], type: "mcq", correctAnswer: 3, explanation: "일상생활 지원은 노인학대 유형이 아닙니다." },
    { id: "law-299", subject: "의료관계법규", question: "노인학대관련범죄의 정의로 옳은 것은?", options: ["모든 사람에 의한 60세 이상 학대", "보호자에 의한 65세 이상 노인학대", "가족에 의한 70세 이상 학대", "의료기관 종사자에 의한 모든 학대"], type: "mcq", correctAnswer: 1, explanation: "보호자에 의한 65세 이상 노인에 대한 학대를 말합니다." },
    { id: "law-300", subject: "의료관계법규", question: "노인의 보건 및 복지증진에 책임이 있는 주체는?", options: ["국가와 지방자치단체", "민간 의료기관", "시설 운영자", "국민연금공단"], type: "mcq", correctAnswer: 0, explanation: "국가와 지방자치단체가 책임을 집니다." },
    { id: "law-301", subject: "의료관계법규", question: "국가와 지방자치단체가 노인복지 시책을 강구할 때 구현해야 하는 것은?", options: [], type: "short-answer", correctAnswer: "기본이념", explanation: "노인의 보건 및 복지증진 시책에는 기본이념이 구현되어야 합니다." },
    { id: "law-302", subject: "의료관계법규", question: "노인의 일상생활 관련 사업자는 노인의 보건복지가 증진되도록 노력해야 한다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "해당 사업자는 노인의 보건복지가 증진되도록 노력해야 합니다." },
    { id: "law-303", subject: "의료관계법규", question: "노인의 안전사고 예방 시책에 해당하지 않는 것은?", options: ["낙상 예방", "교통사고 예방", "노인 이용시설 안전관리", "보이스피싱 예방"], type: "mcq", correctAnswer: 3, explanation: "제시된 안전사고 예방 시책에는 낙상, 교통사고, 시설 안전관리가 포함됩니다." },
    { id: "law-304", subject: "의료관계법규", question: "노인실태조사의 실시 주체와 주기를 올바르게 짝지은 것은?", options: ["국가 / 매년", "보건복지부장관 / 3년마다", "시·도지사 / 2년마다", "국민연금공단 / 5년마다"], type: "mcq", correctAnswer: 1, explanation: "보건복지부장관이 3년마다 실시합니다." },
    { id: "law-305", subject: "의료관계법규", question: "노인실태조사에 포함되는 내용으로 옳지 않은 것은?", options: ["동거 가구의 소득·재산", "부양실태 및 가족관계", "소득·재산 등 경제활동", "보건의료 및 사회활동", "현재 취미활동"], type: "mcq", correctAnswer: 4, explanation: "현재 취미활동은 제시된 노인실태조사 항목이 아닙니다." },
    { id: "law-306", subject: "의료관계법규", question: "노인의 날은 몇 월 며칠인가?", options: [], type: "short-answer", correctAnswer: "10월 2일", explanation: "노인의 날은 10월 2일입니다." },
    { id: "law-307", subject: "의료관계법규", question: "경로의 달은 몇 월인가?", options: [], type: "short-answer", correctAnswer: "10월", explanation: "경로의 달은 10월입니다." },
    { id: "law-308", subject: "의료관계법규", question: "노인학대예방의 날은 몇 월 며칠인가?", options: [], type: "short-answer", correctAnswer: "6월 15일", explanation: "노인학대예방의 날은 6월 15일입니다." },
    { id: "law-309", subject: "의료관계법규", question: "노인 관련 기념일을 올바르게 연결한 것은?", options: ["노인의 날 - 6월 15일", "경로의 달 - 10월", "노인학대예방의 날 - 10월 2일", "노인의 날 - 10월 15일"], type: "mcq", correctAnswer: 1, explanation: "노인의 날은 10월 2일, 경로의 달은 10월, 노인학대예방의 날은 6월 15일입니다." },
    { id: "law-310", subject: "의료관계법규", question: "노인복지시설 종사자 인권교육 대상에서 제외되는 시설은?", options: ["노인요양시설 / 노인주거복지시설", "경로당 / 노인교실", "노인보호전문기관 / 노인일자리지원기관", "재가노인복지시설 / 노인의료복지시설"], type: "mcq", correctAnswer: 1, explanation: "경로당과 노인교실은 종사자 인권교육 대상에서 제외됩니다." },
    { id: "law-311", subject: "의료관계법규", question: "노인복지상담원은 어디에 설치하는가?", options: [], type: "short-answer", correctAnswer: "시·군·구", explanation: "노인복지상담원은 시·군·구에 설치합니다." },
    { id: "law-312", subject: "의료관계법규", question: "지역봉사지도원의 업무에 해당하지 않는 것은?", options: ["민원 상담 및 조언", "도로교통정리 및 주정차단속 보조", "전통문화 전수교육", "국가유산 보호 및 안내", "건물 계단 청소"], type: "mcq", correctAnswer: 4, explanation: "건물 계단 청소는 지역봉사지도원의 업무가 아닙니다." },
    { id: "law-313", subject: "의료관계법규", question: "자동판매기 및 일상생활용품 판매 매점 위탁 시 65세 이상 노인의 신청은 우선적으로 반영해야 한다.", options: ["O", "X"], type: "ox", correctAnswer: 0, explanation: "65세 이상 노인의 신청은 우선적으로 반영해야 합니다." },
    { id: "law-314", subject: "의료관계법규", question: "청소·주차관리·매표 사업 위탁 시 우선 고려할 수 있는 사업체는?", options: ["65세 이상 노인 10% 이상 채용", "65세 이상 노인 20% 이상 채용", "65세 이상 노인 30% 이상 채용", "65세 이상 노인 50% 이상 채용"], type: "mcq", correctAnswer: 1, explanation: "65세 이상 노인을 100분의 20 이상 채용한 사업체를 우선 고려할 수 있습니다." },
    { id: "law-315", subject: "의료관계법규", question: "경로우대에 대한 설명으로 틀린 것은?", options: ["65세 이상자는 공공시설을 무료 또는 할인 이용할 수 있다.", "노인 관련 사업자에게 노인 할인을 권유할 수 있다.", "국가와 지방자치단체는 할인 제공자를 지원할 수 있다.", "65세 이상자는 모든 민간시설을 반드시 무료 이용할 수 있다."], type: "mcq", correctAnswer: 3, explanation: "모든 민간시설을 반드시 무료로 이용할 수 있는 것은 아닙니다." },
    { id: "law-316", subject: "의료관계법규", question: "건강진단의 실시 주체와 주기를 올바르게 연결한 것은?", options: ["보건복지부장관 / 1년에 1회 이상", "복지실시기관 / 2년에 1회 이상", "시·군·구청장 / 3년에 1회 이상", "국민연금공단 / 5년에 1회 이상"], type: "mcq", correctAnswer: 1, explanation: "복지실시기관이 2년에 1회 이상 실시합니다." },
    { id: "law-317", subject: "의료관계법규", question: "건강진단 실시 예정일 며칠 전까지 공고해야 하는가?", options: ["7일 전", "10일 전", "14일 전", "30일 전"], type: "mcq", correctAnswer: 2, explanation: "실시 예정일 14일 전까지 공고해야 합니다." },
    { id: "law-318", subject: "의료관계법규", question: "홀로 사는 노인 돌봄 사업을 수행하기 위해 설치하는 기관은?", options: [], type: "short-answer", correctAnswer: "독거노인종합지원센터", explanation: "독거노인종합지원센터는 홀로 사는 노인 돌봄 관련 사업을 수행합니다." },
    { id: "law-319", subject: "의료관계법규", question: "노인성 질환에 해당하지 않는 것은?", options: ["안질환", "무릎관절증", "전립선 질환", "치매"], type: "mcq", correctAnswer: 3, explanation: "자료에 제시된 노인성 질환에는 안질환, 무릎관절증, 전립선 질환이 포함됩니다." },
    { id: "law-320", subject: "의료관계법규", question: "노인복지시설의 종류에 해당하지 않는 것은?", options: ["노인주거복지시설", "노인의료복지시설", "노인여가복지시설", "재가노인복지시설", "노인보호전문기관", "경로당"], type: "mcq", correctAnswer: 5, explanation: "경로당은 노인복지시설 종류에 포함되지 않습니다." },
    { id: "law-321", subject: "의료관계법규", question: "노인을 입소시켜 급식과 일상생활 편의를 제공하는 시설은?", options: ["노인복지주택", "양로시설", "노인공동생활가정", "노인보호전문기관"], type: "mcq", correctAnswer: 1, explanation: "양로시설은 노인을 입소시켜 급식과 일상생활 편의를 제공합니다." },
    { id: "law-322", subject: "의료관계법규", question: "가정과 같은 주거여건과 급식 및 일상생활 편의를 제공하는 시설은?", options: ["양로시설", "노인공동생활가정", "노인복지주택", "노인의료복지시설"], type: "mcq", correctAnswer: 1, explanation: "노인공동생활가정은 가정과 같은 주거여건을 제공합니다." },
    { id: "law-323", subject: "의료관계법규", question: "노인에게 주거시설을 임대하여 주거 편의와 상담·안전관리를 제공하는 시설은?", options: ["양로시설", "노인공동생활가정", "노인복지주택", "노인보호전문기관"], type: "mcq", correctAnswer: 2, explanation: "노인복지주택은 주거시설을 임대하여 편의를 제공합니다." },
    { id: "law-324", subject: "의료관계법규", question: "양로시설 및 노인공동생활가정의 입소대상자가 아닌 것은?", options: ["65세 이상 수급자", "부양을 받지 못하는 65세 이상자", "실비보호 대상자", "입소비용을 전부 받는 경우 60세 이상자", "독립 주거생활에 문제가 없는 60세 이상자"], type: "mcq", correctAnswer: 4, explanation: "독립 주거생활에 문제가 없는 60세 이상자는 노인복지주택 입소대상자입니다." },
    { id: "law-325", subject: "의료관계법규", question: "노인복지주택의 입소대상자로 옳은 것은?", options: ["65세 이상 수급자만", "65세 이상 의료급여 수급자만", "독립 주거생활에 문제가 없는 60세 이상자", "부양을 받지 못하는 65세 이상자만", "18세 이상 누구나"], type: "mcq", correctAnswer: 2, explanation: "노인복지주택은 독립 주거생활에 문제가 없는 60세 이상자가 대상입니다." },
  ]

  const weekTwelveQuestions: Question[] = [
    { id: "law-326", subject: "의료관계법규", question: "국가 및 지방자치단체 외의 자가 노인주거복지시설을 설치하려는 경우 누구에게 신고해야 하는가?", options: ["보건복지부장관", "시·도지사", "시장·군수·구청장", "국민건강보험공단"], type: "mcq", correctAnswer: 2, explanation: "국가 및 지방자치단체 외의 자는 시장·군수·구청장에게 신고해야 합니다." },
    { id: "law-327", subject: "의료관계법규", question: "노인복지주택 입소자격자가 사망한 경우 함께 입소한 사람은 며칠 이내에 퇴소해야 하는가?", options: ["30일", "60일", "90일", "120일"], type: "mcq", correctAnswer: 2, explanation: "입소자격자가 사망하면 함께 입소한 사람은 90일 이내에 퇴소해야 합니다." },
    { id: "law-328", subject: "의료관계법규", question: "치매, 중풍 등 상당한 장애가 발생하여 도움이 필요한 노인을 입소시켜 급식과 요양 및 일상생활 편의를 제공하는 시설은?", options: ["노인복지관", "노인요양시설", "노인교실", "노인공동생활가정"], type: "mcq", correctAnswer: 1, explanation: "노인요양시설은 도움이 필요한 노인을 입소시켜 급식과 요양 및 일상생활 편의를 제공합니다." },
    { id: "law-329", subject: "의료관계법규", question: "도움이 필요한 노인에게 가정과 같은 주거여건과 급식, 요양 및 다양한 편의를 제공하는 시설은?", options: ["노인요양시설", "노인복지주택", "노인요양공동생활가정", "노인복지관"], type: "mcq", correctAnswer: 2, explanation: "노인요양공동생활가정은 가정과 같은 주거여건과 급식, 요양 및 편의를 제공합니다." },
    { id: "law-330", subject: "의료관계법규", question: "노인의료복지시설 입소대상자에 대한 설명으로 틀린 것은?", options: ["노인성 질환이 있는 사람", "65세 이상인 의료급여 수급자", "부양을 받지 못하는 65세 이상의 사람", "입소비용 전부를 받는 시설은 60세 이상인 사람", "입소대상자의 배우자는 65세 미만이면 함께 입소할 수 없다."], type: "mcq", correctAnswer: 4, explanation: "입소대상자의 배우자는 65세 미만이어도 함께 입소할 수 있습니다." },
    { id: "law-331", subject: "의료관계법규", question: "노인의료복지시설을 설치할 수 있는 주체는?", options: ["국가 및 지방자치단체", "국민건강보험공단 및 보건소", "시·도지사 및 경찰서장", "시장·군수·구청장 및 의료기관"], type: "mcq", correctAnswer: 0, explanation: "노인의료복지시설은 국가 및 지방자치단체가 설치할 수 있습니다." },
    { id: "law-332", subject: "의료관계법규", question: "노인의 취미생활과 사회참여활동에 대한 서비스를 제공하는 시설은?", options: ["경로당", "노인복지관", "노인교실", "노인요양시설"], type: "mcq", correctAnswer: 1, explanation: "노인복지관은 취미생활과 사회참여활동에 대한 서비스를 제공합니다." },
    { id: "law-333", subject: "의료관계법규", question: "지역 노인들이 자율적으로 친목을 도모하고 여가활동을 할 수 있도록 장소를 제공하는 시설은?", options: ["노인복지관", "노인교실", "경로당", "노인요양공동생활가정"], type: "mcq", correctAnswer: 2, explanation: "경로당은 지역 노인들의 친목 및 여가활동 장소를 제공합니다." },
    { id: "law-334", subject: "의료관계법규", question: "노인의 사회활동 참여 욕구를 충족시키기 위해 학습프로그램을 제공하는 시설은?", options: ["노인교실", "노인복지관", "경로당", "노인요양시설"], type: "mcq", correctAnswer: 0, explanation: "노인교실은 노인의 사회활동 참여를 위해 학습프로그램을 제공합니다." },
    { id: "law-335", subject: "의료관계법규", question: "노인복지관, 노인교실, 경로당의 이용대상 연령을 순서대로 바르게 나열한 것은?", options: ["60세 / 60세 / 65세", "65세 / 60세 / 60세", "65세 / 65세 / 60세", "60세 / 65세 / 65세"], type: "mcq", correctAnswer: 0, explanation: "노인복지관과 노인교실은 60세 이상, 경로당은 65세 이상이 이용대상입니다." },
    { id: "law-336", subject: "의료관계법규", question: "국가 및 지방자치단체가 노인여가복지시설에 보조할 수 있는 비용은?", options: ["인건비와 교통비", "양곡구입비와 냉난방 비용", "건물 매입비와 차량 구입비", "교육비와 의료비"], type: "mcq", correctAnswer: 1, explanation: "양곡구입비와 냉난방 비용 등을 보조할 수 있습니다." },
    { id: "law-337", subject: "의료관계법규", question: "경로당에 대한 요금을 감면할 수 있는 사업자가 아닌 것은?", options: ["전기판매사업자", "전기통신사업자", "가스사업자", "수도사업자", "건물사업자"], type: "mcq", correctAnswer: 4, explanation: "건물사업자는 경로당 요금 감면 대상 사업자가 아닙니다." },
    { id: "law-338", subject: "의료관계법규", question: "다음 중 재가노인복지시설에 해당하지 않는 시설은?", options: ["방문요양서비스", "주·야간보호서비스", "단기보호서비스", "방문목욕서비스", "노인공동생활가정"], type: "mcq", correctAnswer: 4, explanation: "노인공동생활가정은 노인주거복지시설이며 재가노인복지시설이 아닙니다." },
    { id: "law-339", subject: "의료관계법규", question: "주간 또는 야간 동안 보호시설에 입소시켜 편의를 제공하고 가족의 부담을 덜어주는 서비스는?", options: ["방문요양서비스", "주·야간보호서비스", "단기보호서비스", "방문목욕서비스"], type: "mcq", correctAnswer: 1, explanation: "주·야간보호서비스는 주간 또는 야간 동안 보호시설에서 편의를 제공합니다." },
    { id: "law-340", subject: "의료관계법규", question: "신체적·정신적 장애로 어려움을 겪는 재가노인에게 필요한 각종 편의를 제공하는 서비스는?", options: ["방문요양서비스", "주·야간보호서비스", "단기보호서비스", "방문목욕서비스"], type: "mcq", correctAnswer: 0, explanation: "방문요양서비스는 재가노인의 가정 등을 방문해 필요한 편의를 제공합니다." },
    { id: "law-341", subject: "의료관계법규", question: "부득이한 사유로 가족의 보호를 받을 수 없는 노인을 단기간 입소시켜 보호하는 서비스는?", options: ["방문요양서비스", "주·야간보호서비스", "단기보호서비스", "방문목욕서비스"], type: "mcq", correctAnswer: 2, explanation: "단기보호서비스는 가족의 보호를 받을 수 없는 노인을 단기간 보호합니다." },
    { id: "law-342", subject: "의료관계법규", question: "재가노인에게 상담을 제공하고 재가노인 및 보호자를 교육하는 서비스는?", options: ["방문간호서비스", "재가노인지원서비스", "복지용구지원서비스", "방문목욕서비스"], type: "mcq", correctAnswer: 1, explanation: "재가노인지원서비스는 상담과 재가노인 및 보호자 교육을 제공합니다." },
    { id: "law-343", subject: "의료관계법규", question: "간호사 등이 재가노인의 가정 등을 방문하여 간호 및 상담 서비스를 제공하는 것은?", options: ["방문요양서비스", "방문간호서비스", "단기보호서비스", "재가노인지원서비스"], type: "mcq", correctAnswer: 1, explanation: "방문간호서비스는 간호사 등이 방문하여 간호와 상담을 제공합니다." },
    { id: "law-344", subject: "의료관계법규", question: "재가노인지원서비스, 방문간호서비스, 복지용구지원서비스에 해당하지 않는 것은?", options: ["재가노인지원서비스", "방문간호서비스", "복지용구지원서비스", "경로당"], type: "mcq", correctAnswer: 3, explanation: "경로당은 노인여가복지시설입니다." },
    { id: "law-345", subject: "의료관계법규", question: "방문요양서비스의 이용 형태로 옳은 것은?", options: ["1일 중 일정 시간 동안 가정에서 보호를 받는다.", "월 1일 이상 15일 이하 시설에 입소한다.", "주간 또는 야간 동안 보호시설에 입소한다.", "복지용구를 제공받거나 대여한다."], type: "mcq", correctAnswer: 0, explanation: "방문요양서비스는 1일 중 일정 시간 동안 가정에서 보호받는 서비스입니다." },
    { id: "law-346", subject: "의료관계법규", question: "단기보호서비스의 보호 기간으로 옳은 것은?", options: ["월 1일 이상 5일 이하", "월 1일 이상 10일 이하", "월 1일 이상 15일 이하", "월 15일 이상 30일 이하"], type: "mcq", correctAnswer: 2, explanation: "단기보호서비스는 월 1일 이상 15일 이하의 기간 동안 이용할 수 있습니다." },
    { id: "law-347", subject: "의료관계법규", question: "요양보호사 자격증을 교부하는 사람은?", options: ["보건복지부장관", "시장·군수·구청장", "시·도지사", "국민건강보험공단 이사장"], type: "mcq", correctAnswer: 2, explanation: "요양보호사 자격증은 시·도지사가 교부합니다." },
    { id: "law-348", subject: "의료관계법규", question: "요양보호사 자격시험을 실시하는 사람은?", options: ["보건복지부장관", "시·도지사", "시장·군수·구청장", "국민건강보험공단 이사장"], type: "mcq", correctAnswer: 1, explanation: "요양보호사 자격시험은 시·도지사가 실시합니다." },
    { id: "law-349", subject: "의료관계법규", question: "요양보호사교육기관의 지정을 취소해야 하는 경우는?", options: ["지정기준에 적합하지 않은 경우", "교육과정을 1년 이상 운영하지 않은 경우", "자료 제출을 하지 않은 경우", "거짓이나 부정한 방법으로 지정받은 경우"], type: "mcq", correctAnswer: 3, explanation: "거짓이나 부정한 방법으로 지정받은 경우 지정을 취소해야 합니다." },
    { id: "law-350", subject: "의료관계법규", question: "노인학대를 예방하고 수시로 신고할 수 있도록 긴급전화를 설치하는 주체는?", options: ["국가 및 지방자치단체", "국민건강보험공단", "의료기관의 장", "노인복지시설의 운영자"], type: "mcq", correctAnswer: 0, explanation: "국가와 지방자치단체가 노인학대 신고를 위한 긴급전화를 설치합니다." },
    { id: "law-351", subject: "의료관계법규", question: "다음 중 노인에 대한 금지행위에 해당하지 않는 것은?", options: ["폭행 또는 상해를 입히는 행위", "성적 수치심을 주는 행위", "노인을 유기하거나 방임하는 행위", "노인을 이용하여 구걸하는 행위", "체포하는 행위"], type: "mcq", correctAnswer: 4, explanation: "체포는 법률에 따른 행위로, 제시된 노인에 대한 금지행위에 해당하지 않습니다." },
    { id: "law-352", subject: "의료관계법규", question: "다음 중 노인에 대한 금지행위에 해당하지 않는 것은?", options: ["정서적 학대행위", "노인에게 급여된 금품을 목적 외 용도로 사용하는 행위", "노인을 유기하거나 방임하는 행위", "자유의사에 어긋나는 노동을 강요하는 행위"], type: "mcq", correctAnswer: 3, explanation: "자유의사에 어긋나는 노동 강요는 제시된 노인복지법상 금지행위에 해당하지 않는 것으로 출제되었습니다." },
    { id: "law-353", subject: "의료관계법규", question: "정당한 사유 없이 사고 등의 사유로 보호자로부터 이탈된 노인을 무엇이라고 하는가?", options: ["독거노인", "실종노인", "요양대상 노인", "보호대상 노인"], type: "mcq", correctAnswer: 1, explanation: "보호자로부터 이탈된 노인을 실종노인이라고 합니다." },
    { id: "law-354", subject: "의료관계법규", question: "실종노인임을 알게 된 경우 신상카드를 제출해야 하는 대상은?", options: ["보건복지부장관", "경찰청장", "지방자치단체의 장", "국민건강보험공단 이사장"], type: "mcq", correctAnswer: 2, explanation: "실종노인을 알게 된 경우 지방자치단체의 장에게 신상카드를 제출해야 합니다." },
    { id: "law-355", subject: "의료관계법규", question: "다음 중 요양보호사의 결격사유에 해당하지 않는 것은?", options: ["정신질환자", "향정신성의약품 중독자", "피성년후견인", "금고 이상의 형을 선고받고 집행이 종료되지 않은 사람", "요양보호사 자격이 취소된 지 1년이 지난 사람"], type: "mcq", correctAnswer: 4, explanation: "자격 취소 후 1년이 지난 사람은 제시된 결격사유에 해당하지 않습니다." },
    { id: "law-356", subject: "의료관계법규", question: "다음 중 노인관련기관에 해당하는 기관은?", options: ["긴급전화센터", "건강가정지원센터", "가족센터", "의료기관", "활동지원기관"], type: "mcq", correctAnswer: 4, explanation: "활동지원기관은 노인관련기관에 해당합니다." },
    { id: "law-357", subject: "의료관계법규", question: "취업제한명령을 선고받은 사람이 노인관련기관 등에 종사하는지 관할 행정기관의 장이 점검·확인하는 주기로 옳은 것은?", options: ["월 1회 이상", "분기별 1회 이상", "반기별 1회 이상", "연 1회 이상"], type: "mcq", correctAnswer: 3, explanation: "관할 행정기관의 장은 연 1회 이상 점검·확인해야 합니다." },
  ]

  lawQuestions.push(...weekTenQuestions, ...weekElevenQuestions, ...weekTwelveQuestions)
  
  export const lawWeeks = [
  { id: "week2", name: "2주차", range: "20문제", min: 1, max: 20 },
  { id: "week3", name: "3주차", range: "20문제", min: 21, max: 40 },
  { id: "week4", name: "4주차", range: "32문제", min: 41, max: 72 },
  { id: "week5", name: "5주차", range: "28문제", min: 73, max: 100 },
  { id: "week6", name: "6주차", range: "17문제", min: 102, max: 118 },
  { id: "week7", name: "7주차", range: "36문제", min: 120, max: 155 },
  { id: "week9", name: "9주차", range: "38문제", min: 200, max: 237 },
  { id: "week10", name: "10주차", range: "39문제", min: 238, max: 276 },
  { id: "week11", name: "11주차", range: "49문제", min: 277, max: 325 },
  { id: "week12", name: "12주차", range: "32문제", min: 326, max: 357 },
  ] as const

// 의료관계법규는 주차별 범위 안에서 문제와 선택지를 무작위로 섞는다.
export function getQuestionsForWeek(weekId: string): Question[] {
  const week = lawWeeks.find((item) => item.id === weekId)
  if (!week) return []

  const questions = lawQuestions.filter((question) => {
    const match = question.id.match(/law-(\d+)/)
    const number = match ? Number(match[1]) : 0
    return number >= week.min && number <= week.max
  })

  return shuffle(questions).map(shuffleQuestionOptions)
}

// 이전 문제를 다시 풀 때 사용할 수 있는 주차 목록을 반환한다.
export function getAvailableLawWeeks() {
  return lawWeeks.filter((week) =>
    lawQuestions.some((question) => {
      const match = question.id.match(/law-(\d+)/)
      const number = match ? Number(match[1]) : 0
      return number >= week.min && number <= week.max
    }),
  )
}
