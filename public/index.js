const dashboard = document.querySelector("#dashboard");
const apps = document.querySelector("#apps");
const authentication = document.querySelector("#authentication");
const uiKit = document.querySelector("#ui-kit");
const pages = document.querySelector("#pages");
const bell = document.querySelector("#bell");
const content = document.querySelector("#content");

let subMenuExist = false;
let notificationExist = false;

const subMenuDiv = document.createElement("div");
subMenuDiv.id = "subMenu";
subMenuDiv.innerHTML = `<ul id="ui-kit-submenu" class="sub-menu">
            <li class="menu-item">
              <span>UI Elements</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </li>
            <li>
              <span>Advanced UI</span>
              <svg
                class="w-6 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </li>
            <li>
              <span>Forms</span>
              <svg
                class="w-6 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </li>
            <li>
              <span>Charts</span>
              <svg
                class="w-6 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </li>
            <li>
              <span>Tablets</span>
              <svg
                class="w-6 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </li>
            <li>
              <span>Icons</span>
              <svg
                class="w-6 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </li>
            <li>
              <span>Maps</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </li>
            <li>
              <span>Email Template</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </li>
          </ul>`;

const notification = document.createElement("div");
notification.id = "notifications";
notification.innerHTML = `<div
          class="notifications m-8 inline-flex flex-col p-4 bg-white shadow-xl border border-gray-400 absolute top-1 right-3"
        >
          <div class="pb-3 flex border-b justify-between items-center">
            <div class="font-medium">Notifications</div>
            <div class="bg-blue-500 px-2 rounded-full text-white">2</div>
          </div>
          <div class="pt-3 flex flex-nowrap justify-between items-center gap-4">
            <i class="fas fa-shopping-cart"></i>
            <div>
              <p class="font-medium">Your order is placed</p>
              <p class="text-gray-600 text-sm">
                Dummy text of the printing and...
              </p>
            </div>
            <div>
              <p class="text-sm">2 min ago</p>
            </div>
          </div>
          <div class="pt-3 flex flex-nowrap justify-between items-center gap-4">
            <i class="fas fa-user-tie p-2 bg-pink-300 rounded-full"></i>
            <div>
              <p class="font-medium">Meeting with designers</p>
              <p class="text-gray-600 text-sm">It is a long established...</p>
            </div>
            <div>
              <p class="text-sm">12 min ago</p>
            </div>
          </div>
          <div class="pt-3 flex flex-nowrap justify-between items-center gap-4">
            <i class="fas fa-users"></i>
            <div>
              <p class="font-medium">UX 3 Task complete</p>
              <p class="text-gray-600 text-sm">Dummy text other printing...</p>
            </div>
            <div>
              <p class="text-sm">42 min ago</p>
            </div>
          </div>
          <div class="flex justify-center pt-4">
            <p class="text-blue-700 font-medium">View all</p>
          </div>
        </div>`;

const toggle = (e) => {
  console.log(e);
};

bell.addEventListener("click", () => {
  if (!notificationExist) {
    content.appendChild(notification);
    notificationExist = true;
  } else {
    document.querySelector("#notifications").remove();
    notificationExist = false;
  }
});

dashboard.addEventListener("click", () => {
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});

apps.addEventListener("click", () => {
  if (subMenuExist) {
    subMenuDiv.remove();
    subMenuExist = false;
  } else {
    apps.appendChild(subMenuDiv);
    subMenuExist = true;
  }
});

authentication.addEventListener("click", () => {
  if (subMenuExist) {
    subMenuDiv.remove();
    subMenuExist = false;
  } else {
    authentication.appendChild(subMenuDiv);
    subMenuExist = true;
  }
});
uiKit.addEventListener("click", () => {
  if (subMenuExist) {
    subMenuDiv.remove();
    subMenuExist = false;
  } else {
    uiKit.appendChild(subMenuDiv);
    subMenuExist = true;
  }
});
pages.addEventListener("click", () => {
  if (subMenuExist) {
    subMenuDiv.remove();
    subMenuExist = false;
  } else {
    page.appendChild(subMenuDiv);
    subMenuExist = true;
  }
});
