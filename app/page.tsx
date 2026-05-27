eexport default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#070A0F",
      color: "#fff",
      padding: "28px 20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: 42, marginBottom: 12 }}>SIYANA</h1>

      <p style={{ fontSize: 20, color: "#A7ADBA", lineHeight: 1.35 }}>
        ИИ, который переводит данные организма на человеческий язык.
      </p>

      <section style={card}>
        <p style={label}>Твоё состояние сегодня</p>
        <h2 style={{ fontSize: 56, margin: "8px 0", color: "#7C5CFF" }}>78/100</h2>
        <p style={text}>Работать можно. Перегружать себя — нет.</p>
      </section>

      <section style={card}>
        <h2>Что происходит</h2>
        <p style={text}>Нервная система перегружена третий день подряд. Организм восстанавливается, но запас энергии ниже обычного.</p>
      </section>

      <section style={card}>
        <h2>Что делать сегодня</h2>
        <ul style={list}>
          <li>Тяжёлую тренировку заменить на лёгкое кардио</li>
          <li>Кофе — только до 14:00</li>
          <li>Не планировать сложные решения после 20:00</li>
          <li>Лечь спать до 23:30</li>
        </ul>
      </section>

      <section style={card}>
        <h2>AI вывод</h2>
        <p style={text}>
          Главная причина просадки — позднее засыпание и накопленный стресс. 
          Если сегодня снизить нагрузку, завтра восстановление улучшится.
        </p>
      </section>
    </main>
  );
}

const card = {
  background: "#111827",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 24,
  padding: 22,
  marginTop: 18
};

const label = {
  color: "#8B5CF6",
  fontSize: 15,
  margin: 0
};

const text = {
  color: "#D1D5DB",
  fontSize: 18,
  lineHeight: 1.45
};

const list = {
  color: "#D1D5DB",
  fontSize: 17,
  lineHeight: 1.55,
  paddingLeft: 20
};
