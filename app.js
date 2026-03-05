const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdlyYnAo4j7Lf_UEwhpyRmY6HLZXGY3tLlSs1UmP0rtIhus1Q/viewform?usp=publish-editor';

codex/implement-static-website-for-survey-guide-7cyoxx
const THEME_STORAGE_KEY = 'preferred-theme';
const root = document.documentElement;
const themeToggleButton = document.getElementById('themeToggle');


const faqData = [
  {
    q: 'Q1. 지장물 조사가 무엇인가요?',
    a: 'A1. 사업에 편입되는 토지에 있는 주택, 시설물, 수목 등의 현황을 확인하고 기록해 손실보상 절차를 진행하기 위한 조사입니다.'
  },
  {
    q: 'Q2. 왜 조사가 필요한가요?',
    a: 'A2. 보상 대상 물건의 누락이나 오류를 줄이고, 정확한 보상 절차를 진행하기 위해 필요합니다.'
  },
  {
    q: 'Q3. 조사하면 바로 보상이 진행되나요?',
    a: 'A3. 조사는 보상 대상 물건을 확인하는 단계이며, 이후 감정평가 등 별도의 보상 절차가 진행됩니다.'
  },
  {
    q: 'Q4. 보상은 얼마나 걸리나요?',
    a: 'A4. 보상 소요 기간은 개별 상황과 절차 진행 상태에 따라 달라져서, 조사 단계에서 정확한 기간을 안내드리기 어렵습니다.'
  },
  {
    q: 'Q5. 보상 금액은 얼마인가요?',
    a: 'A5. 저희는 지장물 조사를 담당하고 있어 보상 금액을 확정해 안내드리기 어렵습니다. 금액은 이후 절차에서 정해집니다.'
  },
  {
    q: 'Q6. 어떤 물건이 조사 대상인가요?',
    a: 'A6. 주택, 비닐하우스, 창고, 각종 시설물, 수목(나무) 등 현장에 있는 물건이 조사 대상입니다.'
  },
  {
    q: 'Q7. 소유자가 아니어도 접수할 수 있나요?',
    a: 'A7. 가능합니다. 임차인이나 관리인처럼 현장 사정을 아는 분이 먼저 접수하셔도 되며, 이후 소유자 등 관계인과 협의해 절차를 진행합니다.'
  },
  {
    q: 'Q8. 현장에서는 어떤 방식으로 확인하나요?',
    a: 'A8. 현장 물건의 수량, 규격, 위치, 상태를 확인해 기록하고, 필요한 경우 사진으로 현황을 남깁니다.'
  },
  {
    q: 'Q9. 사진을 촬영하는 이유가 무엇인가요?',
    a: 'A9. 현황을 정확히 기록하고 이후 보상 절차 진행 시 참고 자료로 활용하기 위해서입니다.'
  },
  {
    q: 'Q10. 방문 일정은 어떻게 잡나요?',
    a: 'A10. 전화 또는 방문요청 접수 후 담당자가 연락드려 일정을 협의합니다.'
  },
  {
    q: 'Q11. 금요일이나 주말에도 조사가 가능한가요?',
    a: 'A11. 금요일은 내근 업무일이며 토요일, 일요일, 공휴일은 휴무로 방문 조사가 어렵습니다. 다른 요일로 협의 부탁드립니다.'
  },
  {
    q: 'Q12. 접수하면 언제 연락을 받나요?',
    a: 'A12. 접수 내용을 확인한 뒤 순차적으로 연락드립니다.'
  },
  {
    q: 'Q13. 문의는 어디로 하면 되나요?',
    a: 'A13. 010-3331-5665로 연락 주시면 안내해 드립니다.'
  }
];

codex/implement-static-website-for-survey-guide-7cyoxx
function getSystemPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
  root.dataset.theme = theme;

  if (themeToggleButton) {
    const isDark = theme === 'dark';
    themeToggleButton.textContent = isDark ? '☀️' : '🌙';
    themeToggleButton.setAttribute('aria-label', isDark ? '라이트 모드로 전환' : '다크 모드로 전환');
  }
}

function initializeThemeToggle() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const initialTheme = storedTheme || getSystemPreferredTheme();
  setTheme(initialTheme);

  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    });
  }

  const systemThemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
  systemThemeMedia.addEventListener('change', () => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      setTheme(getSystemPreferredTheme());
    }
  });
}

function bindVisitRequestLinks() {
  const links = [document.getElementById('visitRequestBtn'), document.getElementById('visitRequestBtnBottom')];

  links.forEach((link) => {
    if (link) {
      link.href = FORM_URL;
    }
  });
}

codex/implement-static-website-for-survey-guide-7cyoxx
function renderFaqAccordion() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  faqData.forEach((item, index) => {
    const article = document.createElement('article');
    article.className = 'accordion-item';

    const button = document.createElement('button');
    button.className = 'accordion-trigger';
    button.type = 'button';
    button.id = `faq-trigger-${index}`;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `faq-panel-${index}`);
    button.textContent = item.q;

    const panel = document.createElement('div');
    panel.className = 'accordion-panel';
    panel.id = `faq-panel-${index}`;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', button.id);
    panel.hidden = true;
    panel.textContent = item.a;

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });

    article.append(button, panel);
    container.append(article);
  });
}

initializeThemeToggle();
bindVisitRequestLinks();
renderFaqAccordion();

