const workItems = document.querySelectorAll(".work .item");
const workItemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.querySelector("#close-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const openCloseButton = document.querySelector("#buttonOpenCloseMenu");
const menuMobileItems = document.querySelector("#menu-mobile-items");

openCloseButton.addEventListener("click", (e) => {
	menuMobileItems.classList.toggle("menu-mobile-closed");
});

workItems.forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();

		currentIndex = parseInt(item.getAttribute("data-id"));
		const contentArr = document.querySelectorAll("#details-container .item");

		document.querySelectorAll("#details-container .item").forEach((item) => {
			item.classList.add("item-hide");
		});
		document
			.querySelectorAll("#details-container .item")
			[currentIndex].classList.toggle("item-hide");
		document.querySelector("#screen").style["animation-name"] = "fade-in";
		document.querySelector("body").style["overflow"] = "hidden";
		setTimeout(() => {
			document.querySelector("#details-container").style.display = "block";
			document.querySelector(".menu").style.display = "none";
			document.querySelector(".menu-mobile").style.display = "none";
		}, 1000);
		setTimeout(() => {
			document.querySelector("#screen").style = "";
		}, 2000);
	});
});

closeButton.addEventListener("click", (e) => {
	e.preventDefault();
	document.querySelector("#screen").style["animation-name"] = "fade-in";
	document.querySelector("body").style["overflow"] = "auto";
	setTimeout(() => {
		document.querySelector("#details-container").style.display = "none";
		document.querySelector(".menu").style.display = "";
		document.querySelector(".menu-mobile").style.display = "";
	}, 1000);
	setTimeout(() => {
		document.querySelector("#screen").style = "";
	}, 2000);
});

prevButton.addEventListener("click", (e) => {
	if (currentIndex - 1 < 0) {
		return;
	}
	currentIndex--;
	loadGalleryItem(currentIndex);
});
nextButton.addEventListener("click", (e) => {
	if (currentIndex + 1 == workItemsCount) {
		return;
	}
	currentIndex++;
	loadGalleryItem(currentIndex);
});

function loadGalleryItem(index) {
	document.querySelectorAll("#details-container .item").forEach((item) => {
		item.classList.add("item-hide");
	});
	document
		.querySelectorAll("#details-container .item")
		[index].classList.toggle("item-hide");
}

const redHome = document.querySelector(".a-home");
const redWork = document.querySelector(".a-work");
const redAbout = document.querySelector(".a-about");
const redContact = document.querySelector(".a-contact");
const redLogo = document.querySelector(".a-logo");

const redHomeMobile = document.querySelector(".a-home-mobile");
const redWorkMobile = document.querySelector(".a-work-mobile");
const redAboutMobile = document.querySelector(".a-about-mobile");
const redContactMobile = document.querySelector(".a-contact-mobile");
const redLogoMobile = document.querySelector(".a-logo-mobile");
// ONCLICK MENU

const onClickLogo = () => {
	onClickHome();
	redLogo.href = "#";
};

const onClickHome = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	redHome.href = "#";
};

const onClickWork = () => {
	window.scroll({
		top: 500,
		behavior: "smooth",
	});
	redWork.href = "#work";
};

const onClickAbout = () => {
	window.scroll({
		top: 1100,
		behavior: "smooth",
	});
	redAbout.href = "#about";
};

const onClickContact = () => {
	window.scroll({
		top: 5000,
		behavior: "smooth",
	});
	redContact.href = "#contact";
};

// ONCLICK MENU MOBILE

const onClickMobileHome = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	onClickCloseMenu();
	redHomeMobile.href = "#";
};

const onClickMobileWork = () => {
	window.scroll({
		top: 1100,
		behavior: "smooth",
	});
	onClickCloseMenu();
	redWorkMobile.href = "#work";
};

const onClickMobileAbout = () => {
	window.scroll({
		top: 2780,
		behavior: "smooth",
	});
	onClickCloseMenu();
	redAboutMobile.href = "#about";
};

const onClickMobileContact = () => {
	window.scroll({
		top: 5000,
		behavior: "smooth",
	});
	onClickCloseMenu();
	redContactMobile.href = "#contact";
};

const onClickMobileLogo = () => {
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
	redLogoMobile.href = "#";
};

const onClickCloseMenu = () => {
	menuMobileItems.classList.toggle("menu-mobile-closed");
};
