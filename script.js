// Test data - Extended version (50 questions)
const questions = [
    // ЗЕМЛЯ - Ресурс (1-5)
    { block: 'earth', type: 'resource', text: 'Я легко выдерживаю стрессовые ситуации и быстро возвращаюсь в равновесие.' },
    { block: 'earth', type: 'resource', text: 'В моей жизни и бизнесе есть чёткая структура: планы, бюджеты, понятные процессы.' },
    { block: 'earth', type: 'resource', text: 'Мне важно, чтобы всё было предсказуемо, и я заранее создаю «подушки безопасности».' },
    { block: 'earth', type: 'resource', text: 'Я терпелив, могу долго и последовательно двигаться к цели, не бросая на полпути.' },
    { block: 'earth', type: 'resource', text: 'Я хорошо чувствую своё тело: вовремя замечаю усталость, напряжение, умею расслабляться.' },

    // ЗЕМЛЯ - Дефицит (6-10)
    { block: 'earth', type: 'deficit', text: 'Я часто ощущаю хаос в делах, отсутствие порядка и систем.' },
    { block: 'earth', type: 'deficit', text: 'Мне трудно придерживаться планов: я срываю дедлайны, бросаю начатое.' },
    { block: 'earth', type: 'deficit', text: 'Моё финансовое положение нестабильно, нет «подушки безопасности».' },
    { block: 'earth', type: 'deficit', text: 'Я не высыпаюсь, игнорирую сигналы тела до тех пор, пока не сваливаюсь.' },
    { block: 'earth', type: 'deficit', text: 'Любые неожиданные изменения выбивают меня из колеи надолго.' },

    // ВОДА - Ресурс (11-15)
    { block: 'water', type: 'resource', text: 'Я легко понимаю эмоции других людей и могу сопереживать.' },
    { block: 'water', type: 'resource', text: 'В конфликтах я скорее ищу компромисс, чем настаиваю на своём.' },
    { block: 'water', type: 'resource', text: 'У меня хорошо развита интуиция: я часто предчувствую, как повернутся события.' },
    { block: 'water', type: 'resource', text: 'Мне легко адаптироваться к новым обстоятельствам, менять планы на ходу.' },
    { block: 'water', type: 'resource', text: 'Я умею быть разным в разных ситуациях: строгим руководителем, мягким партнёром, весёлым другом.' },

    // ВОДА - Дефицит (16-20)
    { block: 'water', type: 'deficit', text: 'Мне трудно понимать, что чувствуют другие люди, я часто бываю бестактным.' },
    { block: 'water', type: 'deficit', text: 'В конфликтах я жёстко настаиваю на своём, даже если это разрушает отношения.' },
    { block: 'water', type: 'deficit', text: 'Я не доверяю интуиции, полагаюсь только на факты и часто ошибаюсь в людях.' },
    { block: 'water', type: 'deficit', text: 'Меня раздражают перемены: я с трудом адаптируюсь даже к небольшим изменениям.' },
    { block: 'water', type: 'deficit', text: 'Я всегда веду себя одинаково, не умею подстраиваться под контекст и собеседника.' },

    // ОГОНЬ - Ресурс (21-25)
    { block: 'fire', type: 'resource', text: 'У меня высокий уровень энергии, я активен и заряжаю окружающих.' },
    { block: 'fire', type: 'resource', text: 'Я не боюсь рисковать и готов действовать в условиях неопределённости.' },
    { block: 'fire', type: 'resource', text: 'Я умею отстаивать свои границы, могу проявить напор и здоровую агрессию.' },
    { block: 'fire', type: 'resource', text: 'Я легко загораюсь новыми идеями и проектами, умею увлечь команду.' },
    { block: 'fire', type: 'resource', text: 'Кризисы меня не ломают, а наоборот — дают импульс к изменениям и росту.' },

    // ОГОНЬ - Дефицит (26-30)
    { block: 'fire', type: 'deficit', text: 'Мне часто не хватает энергии, я чувствую апатию и упадок сил.' },
    { block: 'fire', type: 'deficit', text: 'Я избегаю риска, даже когда возможность очевидна, боюсь действовать без гарантий.' },
    { block: 'fire', type: 'deficit', text: 'Мне трудно сказать «нет», отстоять свои границы, я подавляю агрессию.' },
    { block: 'fire', type: 'deficit', text: 'Новые идеи у меня возникают редко, я не умею зажигать других.' },
    { block: 'fire', type: 'deficit', text: 'Любой кризис воспринимаю как катастрофу, надолго выпадаю из деятельности.' },

    // ВОЗДУХ - Ресурс (31-35)
    { block: 'air', type: 'resource', text: 'Я люблю анализировать, строить теории, видеть закономерности.' },
    { block: 'air', type: 'resource', text: 'Мне легко выражать мысли словами, я убедителен в переговорах.' },
    { block: 'air', type: 'resource', text: 'Я хорошо чувствую социальные связи, легко нахожу нужных людей и выстраиваю партнёрства.' },
    { block: 'air', type: 'resource', text: 'Моя психика подвижна: я быстро переключаюсь между задачами и схватываю новое.' },
    { block: 'air', type: 'resource', text: 'Я часто строю идеальные планы, мечтаю о будущем, вижу перспективу.' },

    // ВОЗДУХ - Дефицит (36-40)
    { block: 'air', type: 'deficit', text: 'Мне сложно анализировать информацию, я вижу поверхностно, не замечаю закономерностей.' },
    { block: 'air', type: 'deficit', text: 'Я с трудом формулирую мысли, часто меня не понимают, переговоры даются тяжело.' },
    { block: 'air', type: 'deficit', text: 'Мои социальные связи слабы, я не умею знакомиться и выстраивать партнёрства.' },
    { block: 'air', type: 'deficit', text: 'Мне трудно переключаться между задачами, я «застреваю» и теряю время.' },
    { block: 'air', type: 'deficit', text: 'Я живу одним днём, не строю долгосрочных планов, не вижу перспективы.' },

    // ЭФИР - Ресурс (41-45)
    { block: 'ether', type: 'resource', text: 'У меня есть чёткое понимание, кто я и куда иду в жизни (своя идентичность).' },
    { block: 'ether', type: 'resource', text: 'Я живу в соответствии со своими ценностями, даже если это сложно.' },
    { block: 'ether', type: 'resource', text: 'Я регулярно анализирую свои поступки и мотивы, умею смотреть на себя со стороны.' },
    { block: 'ether', type: 'resource', text: 'Мне свойственна экзистенциальная глубина: я задумываюсь о смысле жизни, свободе, ответственности.' },
    { block: 'ether', type: 'resource', text: 'Я вижу картину целиком, могу соединить разные сферы жизни в единое целое.' },

    // ЭФИР - Дефицит (46-50)
    { block: 'ether', type: 'deficit', text: 'Я не понимаю, кто я на самом деле, моя идентичность размыта.' },
    { block: 'ether', type: 'deficit', text: 'Мои поступки часто противоречат тому, что я считаю важным, я не следую своим ценностям.' },
    { block: 'ether', type: 'deficit', text: 'Я не задумываюсь о причинах своих поступков, действую автоматически.' },
    { block: 'ether', type: 'deficit', text: 'Вопросы смысла жизни меня не волнуют, я не вижу глубины.' },
    { block: 'ether', type: 'deficit', text: 'Моя жизнь распадается на изолированные сферы (работа, семья, хобби) — я не чувствую целостности.' }
];

const elementsInfo = {
    earth: {
        name: 'Земля',
        icon: '🌍',
        description: 'устойчивость, структура, опора',
        color: 'earth'
    },
    water: {
        name: 'Вода',
        icon: '💧',
        description: 'гибкость, эмпатия, интуиция',
        color: 'water'
    },
    fire: {
        name: 'Огонь',
        icon: '🔥',
        description: 'энергия, лидерство, трансформация',
        color: 'fire'
    },
    air: {
        name: 'Воздух',
        icon: '🌬',
        description: 'интеллект, коммуникация, стратегия',
        color: 'air'
    },
    ether: {
        name: 'Эфир',
        icon: '✨',
        description: 'смыслы, ценности, целостность',
        color: 'ether'
    }
};

// Interpretations for extended version (resource + deficit combinations)
const interpretations = {
    earth: {
        lowResourceHighDeficit: {
            title: 'Зона хаоса: низкий ресурс + высокий дефицит',
            meaning: 'Вы живёте в режиме хронического хаоса: нет систем, планов, финансовой дисциплины. Тело игнорируется до срывов.',
            recommendations: 'Начать с одного регулярного процесса (например, план на день + учёт расходов). Внедрить телесные практики (дыхание, спорт) как якорь. Делегировать часть хаоса, но не уходить в тотальный контроль.'
        },
        highResourceLowDeficit: {
            title: 'Суперсила с риском гиперконтроля: высокий ресурс + низкий дефицит',
            meaning: 'Земля — ваша суперсила, но есть риск гиперконтроля и закостенелости.',
            recommendations: 'Осознанно вносить элементы спонтанности, разрешать себе и команде экспериментировать без жёстких правил. Добавлять Воды и Огня.'
        },
        highResourceHighDeficit: {
            title: 'Амбивалентность: высокий ресурс + высокий дефицит',
            meaning: 'У вас есть структуры, но они даются через напряжение: вы создаёте порядок, но часто срываетесь в хаос.',
            recommendations: 'Проанализировать, какие именно системы работают, а какие «протекают». Сосредоточиться на укреплении 1–2 ключевых опор, чтобы снизить энергозатраты.'
        },
        lowResourceLowDeficit: {
            title: 'Спокойная зона: низкий ресурс + низкий дефицит',
            meaning: 'Стихия не является ни сильной стороной, ни проблемной зоной. Вы не опираетесь на неё активно, но и проблем она не создаёт.',
            recommendations: 'Можно использовать как базу для развития других сфер. При желании — постепенно развивать ресурс.'
        },
        normResource: {
            title: 'Баланс: ресурс в норме',
            meaning: 'Стихия в балансе, вы используете её конструктивно.',
            recommendations: 'Поддерживайте текущий уровень. Следите, чтобы не возник перекос в одну из сторон.'
        }
    },
    water: {
        lowResourceHighDeficit: {
            title: 'Зона ригидности: низкий ресурс + высокий дефицит',
            meaning: 'Вам трудно понимать других, вы ригидны, не адаптируетесь, конфликты проходите жёстко. Интуиция не развита.',
            recommendations: 'Практиковать активное слушание (пересказывать собеседника прежде чем отвечать). Разрешить себе быть уязвимым. Вести дневник интуитивных предчувствий и проверять их.'
        },
        highResourceLowDeficit: {
            title: 'Гибкость с риском растворения: высокий ресурс + низкий дефицит',
            meaning: 'Вы гибки, эмпатичны, но есть риск растворения в других.',
            recommendations: 'Укреплять границы — учиться говорить «нет». Добавлять Земли (чёткие критерии принятия решений).'
        },
        highResourceHighDeficit: {
            title: 'Амбивалентная чувствительность: высокий ресурс + высокий дефицит',
            meaning: 'Вы очень чувствительны, легко считываете других, но часто берёте на себя чужие эмоции и выгораете. Гибкость может оборачиваться потерей себя.',
            recommendations: 'Практики отделения своих чувств от чужих. Ввести «якоря» (ежедневные ритуалы, возвращающие к себе).'
        },
        lowResourceLowDeficit: {
            title: 'Спокойная зона: низкий ресурс + низкий дефицит',
            meaning: 'Стихия не является ни сильной стороной, ни проблемной зоной.',
            recommendations: 'Можно развивать эмпатию и гибкость через наблюдение за другими.'
        },
        normResource: {
            title: 'Баланс: ресурс в норме',
            meaning: 'Стихия в балансе, вы используете её конструктивно.',
            recommendations: 'Поддерживайте текущий уровень.'
        }
    },
    fire: {
        lowResourceHighDeficit: {
            title: 'Зона апатии: низкий ресурс + высокий дефицит',
            meaning: 'Энергия на нуле, апатия, страх риска, подавленная агрессия, кризисы обрушивают.',
            recommendations: 'Начать с физической активации (спорт, утренние ритуалы). Поставить одну амбициозную цель на 30 дней и публично объявить о ней. Разрешить себе злиться конструктивно.'
        },
        highResourceLowDeficit: {
            title: 'Энергия с риском выгорания: высокий ресурс + низкий дефицит',
            meaning: 'Вы энергичны, вдохновляете, но возможен риск выгорания от перегрева.',
            recommendations: 'Вводить паузы перед важными решениями, делегировать, не брать всё на себя. Добавлять Воды (спрашивать команду, где ваш напор мешает).'
        },
        highResourceHighDeficit: {
            title: 'Амбивалентная энергия: высокий ресурс + высокий дефицит',
            meaning: 'Вы то взлетаете, то выгораете: периоды высокой активности сменяются провалами.',
            recommendations: 'Сгладить амплитуду — ввести регулярные ритуалы торможения (дни без дел, спорт). Учиться управлять энергией, а не полагаться на импульсы.'
        },
        lowResourceLowDeficit: {
            title: 'Спокойная зона: низкий ресурс + низкий дефицит',
            meaning: 'Стихия не является ни сильной стороной, ни проблемной зоной.',
            recommendations: 'Можно развивать энергию через постепенное увеличение активности.'
        },
        normResource: {
            title: 'Баланс: ресурс в норме',
            meaning: 'Стихия в балансе, вы используете её конструктивно.',
            recommendations: 'Поддерживайте текущий уровень.'
        }
    },
    air: {
        lowResourceHighDeficit: {
            title: 'Зона заземления: низкий ресурс + высокий дефицит',
            meaning: 'Сложности с анализом, выражением мыслей, узкий круг контактов, жизнь сегодняшним днём.',
            recommendations: 'Расширять информационный кругозор (чтение, курсы). Практиковать структурированное письмо (вести дневник, писать посты). Ставить цель: 1 новое знакомство в неделю.'
        },
        highResourceLowDeficit: {
            title: 'Стратег с риском «ветра в голове»: высокий ресурс + низкий дефицит',
            meaning: 'Вы стратег, отличный коммуникатор, но есть риск «ветра в голове» — много идей, мало внедрений.',
            recommendations: 'Ввести правило «одна новая идея — один завершённый проект». Добавлять Земли (бюджеты, сроки, ответственные).'
        },
        highResourceHighDeficit: {
            title: 'Амбивалентный интеллект: высокий ресурс + высокий дефицит',
            meaning: 'Вы генерируете много идей, но часто зависаете в прожектёрстве, быстро переключаетесь, не доводя до конца.',
            recommendations: 'Фокусироваться на 1–2 проектах в квартал, остальное записывать в «список отложенного». Использовать инструменты приоритизации (матрица Эйзенхауэра и т.п.).'
        },
        lowResourceLowDeficit: {
            title: 'Спокойная зона: низкий ресурс + низкий дефицит',
            meaning: 'Стихия не является ни сильной стороной, ни проблемной зоной.',
            recommendations: 'Можно развивать через обучение и нетворкинг.'
        },
        normResource: {
            title: 'Баланс: ресурс в норме',
            meaning: 'Стихия в балансе, вы используете её конструктивно.',
            recommendations: 'Поддерживайте текущий уровень.'
        }
    },
    ether: {
        lowResourceHighDeficit: {
            title: 'Зона потери смысла: низкий ресурс + высокий дефицит',
            meaning: 'Нет внутреннего компаса, ценности размыты, рефлексия отсутствует, жизнь ощущается бессмысленной.',
            recommendations: 'Ежедневно письменно отвечать на вопрос «Зачем я это делаю?». Вести дневник самонаблюдения. Искать не глобальную миссию, а маленькие смыслы в каждом дне.'
        },
        highResourceLowDeficit: {
            title: 'Сильная идентичность с риском абстракций: высокий ресурс + низкий дефицит',
            meaning: 'У вас сильная идентичность, ценности, целостность, но возможен уход в абстракции в ущерб практике.',
            recommendations: 'Для каждой ценности прописать конкретные действия, которые её реализуют. Добавлять Земли, чтобы смыслы воплощались.'
        },
        highResourceHighDeficit: {
            title: 'Амбивалентная рефлексия: высокий ресурс + высокий дефицит',
            meaning: 'Вы глубоко рефлексируете, но часто уходите в «духовное» или парализующий самоанализ. Ценности могут быть жёсткими, блокирующими компромиссы.',
            recommendations: 'Ограничить время на рефлексию (например, 20 минут в день). Соотносить смыслы с экономикой бизнеса — миссия не должна делать проект нежизнеспособным.'
        },
        lowResourceLowDeficit: {
            title: 'Спокойная зона: низкий ресурс + низкий дефицит',
            meaning: 'Стихия не является ни сильной стороной, ни проблемной зоной.',
            recommendations: 'Можно развивать через вопросы о смыслах и ценностях.'
        },
        normResource: {
            title: 'Баланс: ресурс в норме',
            meaning: 'Стихия в балансе, вы используете её конструктивно.',
            recommendations: 'Поддерживайте текущий уровень.'
        }
    }
};

// App state
let currentQuestion = 0;
let answers = {
    earth: { resource: 0, deficit: 0 },
    water: { resource: 0, deficit: 0 },
    fire: { resource: 0, deficit: 0 },
    air: { resource: 0, deficit: 0 },
    ether: { resource: 0, deficit: 0 }
};

// DOM elements
const introScreen = document.getElementById('intro-screen');
const testScreen = document.getElementById('test-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const questionBlockTitle = document.getElementById('question-block-title');
const questionText = document.getElementById('question-text');
const scaleOptions = document.querySelectorAll('.scale-option');
const resultsSummary = document.getElementById('results-summary');
const resultsDetails = document.getElementById('results-details');

// Initialize
function init() {
    startBtn.addEventListener('click', startTest);
    restartBtn.addEventListener('click', restartTest);

    scaleOptions.forEach(option => {
        option.addEventListener('click', selectAnswer);
    });
}

function startTest() {
    introScreen.classList.remove('active');
    testScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    const elementInfo = elementsInfo[question.block];

    // Update progress
    const progress = ((currentQuestion) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;

    // Update question - show type badge
    const typeBadge = question.type === 'resource' ? '🟢 Ресурс' : '🔴 Дефицит';
    questionBlockTitle.textContent = `${elementInfo.icon} ${elementInfo.name} — ${typeBadge}`;
    questionBlockTitle.className = `block-title ${elementInfo.color}`;
    questionText.textContent = question.text;

    // Reset scale options
    scaleOptions.forEach(option => {
        option.classList.remove('selected');
    });
}

function selectAnswer(e) {
    const value = parseInt(e.target.dataset.value);

    scaleOptions.forEach(option => {
        option.classList.remove('selected');
    });

    e.target.classList.add('selected');

    // Store answer by block and type
    const question = questions[currentQuestion];
    answers[question.block][question.type] += value;

    // Auto-advance to next question
    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion >= questions.length) {
            showResults();
        } else {
            showQuestion();
        }
    }, 200);
}

function getLevel(score) {
    if (score <= 12) return 'low';
    if (score <= 18) return 'norm';
    return 'high';
}

function getLevelText(level) {
    const texts = {
        low: 'Низкий',
        norm: 'Норма',
        high: 'Высокий'
    };
    return texts[level];
}

function getInterpretationKey(resourceLevel, deficitLevel) {
    if (resourceLevel === 'norm') return 'normResource';
    if (resourceLevel === 'low' && deficitLevel === 'high') return 'lowResourceHighDeficit';
    if (resourceLevel === 'high' && deficitLevel === 'low') return 'highResourceLowDeficit';
    if (resourceLevel === 'high' && deficitLevel === 'high') return 'highResourceHighDeficit';
    return 'lowResourceLowDeficit';
}

function calculateResults() {
    const results = {};
    const blocks = ['earth', 'water', 'fire', 'air', 'ether'];

    blocks.forEach(block => {
        const resource = answers[block]?.resource || 0;
        const deficit = answers[block]?.deficit || 0;
        results[block] = {
            resource,
            deficit,
            resourceLevel: getLevel(resource),
            deficitLevel: getLevel(deficit)
        };
    });

    return results;
}

function showResults() {
    testScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    const results = calculateResults();

    // Build summary
    let summaryHTML = '';
    Object.keys(results).forEach(block => {
        const result = results[block];
        const info = elementsInfo[block];

        summaryHTML += `
            <div class="result-item">
                <div class="result-name">
                    <span class="result-icon">${info.icon}</span>
                    <span>${info.name}</span>
                </div>
                <div class="result-value result-value-dual">
                    <span class="result-score-pair">
                        <span class="result-label">Ресурс:</span>
                        <span class="result-score ${info.color}">${result.resource}</span>
                        <span class="result-level ${result.resourceLevel}">${getLevelText(result.resourceLevel)}</span>
                    </span>
                    <span class="result-score-pair">
                        <span class="result-label">Дефицит:</span>
                        <span class="result-score ${info.color}">${result.deficit}</span>
                        <span class="result-level ${result.deficitLevel}">${getLevelText(result.deficitLevel)}</span>
                    </span>
                </div>
            </div>
        `;
    });
    resultsSummary.innerHTML = summaryHTML;

    // Build details
    let detailsHTML = '';
    Object.keys(results).forEach(block => {
        const result = results[block];
        const info = elementsInfo[block];
        const interpretationKey = getInterpretationKey(result.resourceLevel, result.deficitLevel);
        const interpretation = interpretations[block][interpretationKey];

        detailsHTML += `
            <div class="detail-block">
                <h3 class="${info.color}">
                    <span class="icon">${info.icon}</span>
                    <span>${info.name}</span>
                </h3>
                <div class="result-scores-inline">
                    <span><strong>Ресурс:</strong> ${result.resource} (${getLevelText(result.resourceLevel)})</span>
                    <span><strong>Дефицит:</strong> ${result.deficit} (${getLevelText(result.deficitLevel)})</span>
                </div>
                <div class="detail-content">
                    <p><strong>${interpretation.title}</strong></p>
                    <p>${interpretation.meaning}</p>
                    <p><strong>Рекомендации:</strong> ${interpretation.recommendations}</p>
                </div>
            </div>
        `;
    });
    resultsDetails.innerHTML = detailsHTML;
}

function restartTest() {
    currentQuestion = 0;
    answers = {
        earth: { resource: 0, deficit: 0 },
        water: { resource: 0, deficit: 0 },
        fire: { resource: 0, deficit: 0 },
        air: { resource: 0, deficit: 0 },
        ether: { resource: 0, deficit: 0 }
    };
    resultsScreen.classList.remove('active');
    introScreen.classList.add('active');
}

// Start the app
init();
