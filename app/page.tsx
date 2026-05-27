export default function Home() {
  return (
    <main
      style={{
        background: "#0B0F14",
        minHeight: "100vh",
        color: "white",
        padding: "24px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
        SIYANA
      </h1>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "18px",
          marginBottom: "32px",
        }}
      >
        ИИ-платформа контроля здоровья и восстановления
      </p>

      <div
        style={{
          background: "#111827",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "16px",
        }}
      >
        <h2>Восстановление</h2>
        <h1 style={{ fontSize: "48px", color: "#22C55E" }}>82%</h1>
        <p>Организм готов к нагрузке</p>
      </div>

      <div
        style={{
          background: "#111827",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "16px",
        }}
      >
        <h2>Сон</h2>
        <h1 style={{ fontSize: "36px" }}>7ч 48м</h1>
        <p>Глубокий сон: 2ч 11м</p>
      </div>

      <div
        style={{
          background: "#111827",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <h2>Нагрузка</h2>
        <h1 style={{ fontSize: "36px", color: "#F97316" }}>13.4</h1>
        <p>Сегодня лучше без тяжелой тренировки</p>
      </div>
    </main>
  );
}
