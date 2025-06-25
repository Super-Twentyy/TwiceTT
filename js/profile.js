const members = {
  nayeon: {
    name: "Im Nayeon",
    dob: "September 22, 1995",
    bio: "Nayeon is the main vocalist and lead dancer of TWICE, known for her bright and cheerful personality.",
    img: "assets/images/nayeon.jpg"
  },
  jeongyeon: {
    name: "Yoo Jeongyeon",
    dob: "November 1, 1996",
    bio: "Jeongyeon is the lead vocalist, known for her husky voice and charming visuals.",
    img: "assets/images/jeongyeon.jpg"
  },
  momo: {
    name: "Hirai Momo",
    dob: "November 9, 1996",
    bio: "Momo is the main dancer and vocalist, famous for her powerful dance skills.",
    img: "assets/images/momo.jpg"
  },
  sana: {
    name: "Minatozaki Sana",
    dob: "December 29, 1996",
    bio: "Sana is a vocalist and lead dancer, admired for her cute and bubbly charm.",
    img: "assets/images/sana.jpg"
  },
  jihyo: {
    name: "Park Jihyo",
    dob: "February 1, 1997",
    bio: "Jihyo is the leader and main vocalist of TWICE, known for her strong vocal skills.",
    img: "assets/images/jihyo.jpg"
  },
  mina: {
    name: "Myoui Mina",
    dob: "March 24, 1997",
    bio: "Mina is a main dancer and vocalist, praised for her graceful and elegant stage presence.",
    img: "assets/images/mina.jpg"
  },
  dahyun: {
    name: "Kim Dahyun",
    dob: "May 28, 1998",
    bio: "Dahyun is a lead rapper and vocalist, known for her bright personality and unique rap style.",
    img: "assets/images/dahyun.jpg"
  },
  chaeyoung: {
    name: "Son Chaeyoung",
    dob: "April 23, 1999",
    bio: "Chaeyoung is the main rapper and vocalist, also talented in songwriting and producing.",
    img: "assets/images/chaeyoung.jpg"
  },
  tzuyu: {
    name: "Chou Tzuyu",
    dob: "June 14, 1999",
    bio: "Tzuyu is the lead dancer and vocalist, admired for her elegance and beauty.",
    img: "assets/images/tzuyu.jpg"
  }
};

const listItems = document.querySelectorAll(".profile-list ul li");
const profileDetails = document.querySelector(".profile-details");

function loadMember(memberKey) {
  const member = members[memberKey];
  if (!member) return;

  profileDetails.innerHTML = `
    <img src="${member.img}" alt="${member.name}" />
    <h3>${member.name}</h3>
    <p><strong>Date of Birth:</strong> ${member.dob}</p>
    <p>${member.bio}</p>
    <button id="btnMoreInfo" class="btn-more-info">More About ${member.name.split(' ')[1]}</button>
  `;

  const btnMoreInfo = document.getElementById("btnMoreInfo");
  btnMoreInfo.addEventListener("click", () => {
    window.location.href = `${memberKey}.html`;
  });

  listItems.forEach(li => {
    li.classList.toggle("active", li.dataset.member === memberKey);
  });
}

// Tambahkan event listener untuk setiap item
listItems.forEach(li => {
  li.addEventListener("click", () => {
    const memberKey = li.dataset.member;
    loadMember(memberKey);
  });
});

// Load default member (Jihyo)
loadMember("jihyo");
