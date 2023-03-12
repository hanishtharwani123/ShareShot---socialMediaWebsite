const post = document.getElementById("post-btn");
post.addEventListener("click", () => {
  let popup = document.createElement("div");
  popup.classList.add("popup");
  let htmldata = `
    <div class="overlay">
            <i class="fas fa-regular fa-xmark" id="cancel_btn"></i>
            <div class="content">
                <div class="class1">
                <img src="" id="img_show" class="img_show">
                    <div class="file-input-container">
                        <input id="image-input" class="file-input" type="file" accept="image/*">
                        <label for="image-input" class="custom-file-input"><i class="fa fa-duotone fa-image"
                                id="img-icon"></i>Choose File</label>
                    </div>
                </div>
                <hr class="linebr">
                <div class="class2">
                    <span class="captonss">Caption</span>
                    <textarea name="" id="write" cols="30" rows="6" placeholder="Write a caption..."></textarea>
                    <button id="postt">Post Now</button>
                </div>
            </div>
        </div>`;
  popup.insertAdjacentHTML("afterbegin", htmldata);
  document.body.appendChild(popup);

  let cancel = document.getElementById("cancel_btn");
  cancel.addEventListener("click", () => {
    popup.remove();
  });

  const select_Image = document.getElementById("img_show");
  const fileInput = document.getElementById("image-input");
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      select_Image.src = reader.result;
      select_Image.style.display = "block";
    });

    reader.readAsDataURL(file);
  });

  fileInput.style.display = "block";

  let story = document.querySelector(".story");
  let post = document.getElementById("postt");
  let textArea = document.getElementById("write");
  post.addEventListener("click", () => {
    popup.remove();
    const htmlDATA = `
    <div class="upload-post">
            <div class="upload1">
                <div class="name-img">
                    <img src="images/my-pic.jpg" id="profile-icon">
                    <span class="uploader-name">Hanish</span>
                    <img src="images/blue_tick.png" id="blue-tick">
                    <span class="time">1 minute</span>
                </div>
                <div class="clas">
                <i class="fa-solid fa-ellipsis" id="dot-icon2"></i>
                <div class="delete-option" style="display: none;">
                    <button class="delete-btn">Delete</button>
                </div>
            </div>
            </div>
            ${
              fileInput.value
                ? `<img src="${select_Image.src}" id="post-img" width="525px" height="470px">`
                : ""
            }
            <div class="icons-btn">
                <i class="fa-regular fa-heart" id="icon_like1"></i>
                <i class="fa fa-light fa-comment" id="icon-like"></i>
                <i class="fa fa-light fa-arrow-up-from-bracket" id="icon-like2"></i>
            </div>
            <span class="like-no">100k likes</span>
            <div class="caption">
                <span class="cap-name">Hanish Tharwani</span>
                <span class="capti">${textArea.value}</span>
            </div>
        </div>`;
    story.insertAdjacentHTML("afterend", htmlDATA);

    const like = document.querySelectorAll("#icon_like1");
    like.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("far");
        btn.classList.toggle("fas");
      });
    });
    const dotIcon = document.getElementById("dot-icon2");
    const deleteOption = document.querySelector(".delete-option");
    const deleteBtn = document.querySelector(".delete-btn");

    dotIcon.addEventListener("click", () => {
      deleteOption.style.display = "block";
    });

    deleteBtn.addEventListener("click", () => {
      dotIcon.parentElement.parentElement.parentElement.remove();
    });
  });
});

const like = document.querySelectorAll("#icon_like1");
like.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("far");
    element.classList.toggle("fas");
  });
});
