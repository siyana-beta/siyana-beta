export default function Dashboard() {
  return <main className="page"><div className="wrap"><PhoneDashboard /></div></main>
}

const rows = [
  ['Понять состояние', 'Организм готов к нагрузке', 'Готово'],
  ['Тренировка', 'Силовая или HIIT 45–60 мин', 'Можно'],
  ['Кофе', 'Не позже 14:00', 'Важно'],
  ['Сон', 'Лечь до 23:30', 'План'],
]

function PhoneDashboard() {
  return (
    <div className="phone" style={{ marginTop: 20 }}>
      <div className="screen">
        <div className="topbar"><b>Доброе утро</b><span className="small">SIYANA Beta</span></div>
        <div className="card">
          <div className="small">Body readiness — готовность организма</div>
          <div className="score green">82%</div>
          <p style={{ color: '#d1d5db' }}>Хорошая готовность к нагрузкам.</p>
        </div>
        <div className="card ai">
          <div className="small violet">AI insight — вывод ИИ</div>
          <h3>Сегодня можно работать и тренироваться</h3>
          <p style={{ color: '#d1d5db', lineHeight: 1.5 }}>Главный ресурс дня — первая половина. Вечером лучше не перегружать нервную систему.</p>
        </div>
        {rows.map(([a,b,c]) => <div className="metric" key={a} style={{ marginBottom: 10, display:'flex', justifyContent:'space-between', gap: 12 }}><div><b>{a}</b><div className="small">{b}</div></div><span className="violet">{c}</span></div>)}
        <div className="bottom"><a className="active" href="/dashboard">Главная</a><a href="/metrics">Аналитика</a><a href="/diary">Дневник</a><span>Профиль</span></div>
      </div>
    </div>
  )
}
