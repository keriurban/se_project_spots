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

profileEditBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

function editProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", editProfileSubmit);

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

profileAddBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

function newPostSubmit(evt) {
  evt.preventDefault();
  console.log(newImageInput.value);
  console.log(newCaptionInput.value);

  newPostModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit", newPostSubmit);

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
