const metrics = [
  { title: 'Готовность', value: '82%', note: 'Можно тренироваться', color: 'green' },
  { title: 'Стресс', value: 'Средний', note: 'Без перегруза', color: 'violet' },
  { title: 'Энергия', value: '74%', note: 'Пик до 17:00', color: 'green' },
  { title: 'Риск', value: 'Низкий', note: 'Контроль в норме', color: 'orange' },
]

const features = [
  ['Human translation', 'Перевод метрик', 'SIYANA переводит данные WHOOP на простой русский язык без сложных терминов.'],
  ['AI insights', 'Выводы ИИ', 'Не просто цифры, а объяснение: что происходит, почему и что делать сегодня.'],
  ['Daily recommendations', 'Рекомендации дня', 'Нагрузка, сон, кофе, питание и режим — в одном коротком плане.'],
]

const soon = ['Apple Health', 'Garmin', 'Oura', 'Smart scales — умные весы', 'Nutrition AI — питание', 'Stress analytics — стресс', 'Glucose tracking — сахар', 'Voice AI assistant — голосовой ИИ']

export default function Home() {
  return (
    <main className="page">
      <div className="wrap">
        <nav className="nav">
          <div className="brand"><span className="mark" /> SIYANA</div>
          <div className="navlinks">
            <a href="#product">О продукте</a><a href="#how">Как работает</a><a href="#soon">Скоро</a>
          </div>
          <a className="btn primary" href="/invite/beta">Получить доступ</a>
        </nav>

        <section className="hero" id="product">
          <div>
            <span className="badge">SIYANA Beta — ранний доступ</span>
            <h1 className="h1">AI operating system <span className="grad">for your body</span></h1>
            <p className="lead">ИИ-операционная система организма. SIYANA берёт данные WHOOP и переводит их в понятные выводы: что с тобой, почему и что делать сегодня.</p>
            <div className="heroActions">
              <a className="btn primary" href="/dashboard">Открыть демо</a>
              <a className="btn" href="#how">Как это работает</a>
            </div>
            <p className="small">Сейчас: WHOOP translation — перевод WHOOP. Скоро: Apple Health, Garmin, Oura, умные весы и AI Coach.</p>
            <div className="logos" style={{ marginTop: 14 }}>
              {['WHOOP', 'Apple Health', 'Garmin', 'Oura', 'Withings', '+ ещё'].map((x) => <span className="chip" key={x}>{x}</span>)}
            </div>
          </div>

          <Phone />
        </section>

        <section className="section" id="how">
          <h2 className="sectionTitle">Всё, что важно. Ничего лишнего.</h2>
          <div className="cards">
            {features.map(([en, ru, text]) => (
              <div className="feature" key={en}>
                <div className="small violet">{en} — {ru}</div>
                <h3>{ru}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="soon">
          <h2 className="sectionTitle">Скоро подключим</h2>
          <div className="roadmap">
            {soon.map((x) => <div className="soon" key={x}>{x}</div>)}
          </div>
        </section>

        <section className="cta">
          <div>
            <h2 className="sectionTitle" style={{ marginBottom: 8 }}>Закрытая Beta</h2>
            <p className="lead" style={{ margin: 0 }}>Первые пользователи получают бесплатный доступ и помогают сделать лучший продукт для здоровья и высокой продуктивности.</p>
          </div>
          <a className="btn primary" href="/invite/beta">Получить доступ</a>
        </section>
      </div>
    </main>
  )
}

function Phone() {
  return (
    <div className="phone">
      <div className="screen">
        <div className="topbar"><b>Сегодня</b><span className="small">Beta</span></div>
        <div className="card">
          <div className="small">Body readiness — готовность организма</div>
          <div className="score green">82%</div>
          <div className="bar"><span style={{ width: '82%' }} /></div>
          <p style={{ margin: 0, color: '#d1d5db' }}>Хорошее состояние. Можно планировать интенсивную тренировку.</p>
        </div>
        <div className="card ai">
          <div className="small violet">AI insight — вывод ИИ</div>
          <h3>Организм восстановился хорошо</h3>
          <p style={{ color: '#d1d5db', lineHeight: 1.5 }}>Сон был достаточным, стресс под контролем. Лучшее окно для нагрузки — с 13:00 до 17:00.</p>
        </div>
        <div className="grid">
          {metrics.map((m) => <div className="metric" key={m.title}><div className="small">{m.title}</div><b className={m.color}>{m.value}</b><div className="small">{m.note}</div></div>)}
        </div>
        <div className="card">
          <div className="small">Daily recommendations — рекомендации</div>
          <ul style={{ color: '#d1d5db', lineHeight: 1.7, paddingLeft: 20 }}>
            <li>Силовая тренировка или HIIT — допустимо</li>
            <li>Кофе — до 14:00</li>
            <li>Сон — лечь до 23:30</li>
          </ul>
        </div>
        <div className="bottom"><span className="active">Главная</span><span>Аналитика</span><span>Дневник</span><span>Профиль</span></div>
      </div>
    </div>
  )
}
