const aside_box: HTMLElement | null = document.querySelector(".aside_box")
const main_box: HTMLElement | null = document.querySelector(".main_box")
const users: HTMLElement | null = document.querySelector(".users")

interface User {
    readonly id: number;
    email: string;
    password: number | string;
    name: string;
    role: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
}

const resMain = (data: User): void => {
    if (main_box) {
        main_box.innerHTML = `
            <div class="main_box_item">
                <img src="${data.avatar}">
                <p class="main_box_item_name"><strong>Name:</strong> ${data.name}</p>
                <p class="main_box_item_email"><strong>Email:</strong> ${data.email}</p>
                <p class="main_box_item_role"><strong>Role:</strong> ${data.role}</p>
            </div>
        `
    }
}

const fetchMain = (): void => {
    if (main_box) {
        const id = localStorage.getItem("id")
        console.log(id);
        
        fetch(`https://api.escuelajs.co/api/v1/users/${id}`).then(res => res.json()).then(data => {
            resMain(data)
        })
    }
}

