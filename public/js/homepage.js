const goToDashboard = async (event) => {
  event.preventDefault();
  const response = await fetch(`/api/postdata/`, {
    method: "GET",
  });
};

document.getElementById("dashboard").addEventListener("click", goToDashboard);
