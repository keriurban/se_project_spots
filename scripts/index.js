const profileEditBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = editProfileModal.querySelector("#profile-name-input");
const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);
const editProfileForm = editProfileModal.querySelector(".modal__form");

const profileAddBtn = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const newImageInput = newPostModal.querySelector("#new-image-input");
const newCaptionInput = newPostModal.querySelector("#new-caption-input");
const newPostForm = newPostModal.querySelector(".modal__form");

const initialCards = [
  {
    name: "Castle",
    link: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mickey",
    link: "https://images.unsplash.com/photo-1681934540198-f9036fec8917?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tower of Terror",
    link: "https://images.unsplash.com/photo-1489368066883-369c64aa01bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Journey of Water",
    link: "https://images.unsplash.com/photo-1695596134541-0a52576234ab?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tree of Life",
    link: "https://images.unsplash.com/photo-1692303366685-390f3e039bf9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Spaceship Earth",
    link: "https://images.unsplash.com/photo-1667135550738-d6159a4b402a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function submitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editProfileModal);
}

profileEditBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

editProfileForm.addEventListener("submit", submitEditProfile);

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

profileAddBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

function submitNewPost(evt) {
  evt.preventDefault();
  console.log(newImageInput.value);
  console.log(newCaptionInput.value);

  closeModal(newPostModal);
  newPostForm.reset();
}

newPostForm.addEventListener("submit", submitNewPost);

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

initialCards.forEach(function (item) {
  console.log(item.name);
});
