const formatDate = (date) => {
  const newDate = new Date(date * 1000);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const textDate = `${day}/${month}`;

  return textDate === getToday()
    ? "Hoy"
    : newDate.toLocaleDateString("es-ES", { weekday: "long" });
};

const getToday = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  return `${day}/${month}`;
};

export default formatDate;
