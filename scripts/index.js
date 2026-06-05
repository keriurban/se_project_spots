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
}

newPostForm.addEventListener("submit", submitNewPost);

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});
