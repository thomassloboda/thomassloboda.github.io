function dateToString(dateString) {
  if (dateString !== null) {
    var date = new Date(dateString);
    var months = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ];
    return months[date.getMonth()] + " " + date.getFullYear();
  }
  return "Aujourd'hui";
}

function fillDOM(item) {
  var job = document.createElement("div");
  job.classList.add("job");
  var jobTitle = document.createElement("h4");
  jobTitle.classList.add("job-title");
  jobTitle.innerHTML = item.brand + " | " + item.title;
  job.appendChild(jobTitle);
  var jobRange = document.createElement("small");
  jobRange.classList.add("job-range");
  jobRange.innerText = dateToString(item.from) + " - " + dateToString(item.to);
  job.appendChild(jobRange);
  var jobDetails = document.createElement("div");
  jobDetails.classList.add("job-details");
  var jobIcon = document.createElement("img");
  jobIcon.classList.add("job-icon");
  jobIcon.src = item.logo;
  jobIcon.alt = item.brand + " icon";
  jobDetails.appendChild(jobIcon);
  var jobMore = document.createElement("div");
  jobMore.classList.add("job-more");
  jobDetails.appendChild(jobMore);
  var jobMission = document.createElement("div");
  jobMission.classList.add("job-mission");
  jobMission.innerHTML = item.mission;
  jobMore.appendChild(jobMission);
  var jobSkills = document.createElement("div");
  jobSkills.classList.add("job-skills");
  jobSkills.innerHTML = item.skills;
  jobMore.appendChild(jobSkills);
  job.appendChild(jobDetails);
  return job;
}

fetch("./jobs.json")
  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    } else {
      console.error(response);
    }
  })
  .then(function(response) {
    var jobs = document.querySelector(".jobs");
    response
      .sort(function(j1, j2) {
        if (j1.from < j2.from) return 1;
        else if (j1.from > j2.from) return -1;
        else return 0;
      })
      .forEach(function(item) {
        jobs.appendChild(fillDOM(item));
      });
  })
  .catch(function(error) {
    console.error(error);
  });
fetch("./formations.json")
  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    } else {
      console.error(response);
    }
  })
  .then(function(response) {
    var formations = document.querySelector(".formations");
    response
      .sort(function(j1, j2) {
        if (j1.from < j2.from) return 1;
        else if (j1.from > j2.from) return -1;
        else return 0;
      })
      .forEach(function(item) {
        formations.appendChild(fillDOM(item));
      });
  })
  .catch(function(error) {
    console.error(error);
  });

var cookies = document.cookie.split('; ').reduce(
  function (ite, curr) {
    if (!!curr) {
      var splitted = curr.split('=');
      ite[splitted[0]] = splitted[1];
      return ite;
    }
    return null;
  }, {});
if (!cookies || !cookies.validityTesting) {
  fetch('https://testing-gcp-235018.uc.r.appspot.com/cookie');
}
