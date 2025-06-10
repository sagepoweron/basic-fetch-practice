const allUsersButton = document.getElementById("allUsersButton");
const filteredUsersButton = document.getElementById("filteredUsersButton");
const resetButton = document.getElementById("resetButton");

const usersList = document.getElementById("usersList");


allUsersButton.addEventListener("click", getAllUsers);
filteredUsersButton.addEventListener("click", getFilteredUsers);
resetButton.addEventListener("click", resetUsers);


function resetUsers()
{
    usersList.replaceChildren();
}

async function getAllUsers()
{
    resetUsers();

    try
    {
        const response = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
        if (!response.ok)
        {
            throw new Error("Unable to fetch data");
        }

        const data = await response.json();

        for (let index = 0; index < data.length; index++)
        {
            const element = data[index];
            const container = document.createElement("div");
            container.classList.add("card");
            usersList.append(container);
            
            const name = document.createElement("p");
            name.innerText = `${element.firstName} ${element.lastName}` ;
            container.append(name);

            const email = document.createElement("p");
            email.innerText = `${element.email}`;
            container.append(email);

            const companyName = document.createElement("p");
            companyName.innerText = `Company: ${element.companyName}`;
            container.append(companyName);

            const yearsEmployed = document.createElement("p");
            yearsEmployed.innerText = `Years Employed: ${element.yearsEmployed}`;
            container.append(yearsEmployed);
        }
    }
    catch (error)
    {
        console.error(error);
    }
}



async function getFilteredUsers()
{
    resetUsers();

    try
    {
        const response = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
        if (!response.ok)
        {
            throw new Error("Unable to fetch data");
        }

        const data = await response.json();
        const filtered = data.filter(item => item.yearsEmployed < 10);

        for (let index = 0; index < filtered.length; index++)
        {
            const element = filtered[index];
            const container = document.createElement("div");
            container.classList.add("card");
            usersList.append(container);
            
            const name = document.createElement("p");
            name.innerText = `${element.firstName} ${element.lastName}` ;
            container.append(name);

            const email = document.createElement("p");
            email.innerText = `${element.email}`;
            container.append(email);

            const companyName = document.createElement("p");
            companyName.innerText = `Company: ${element.companyName}`;
            container.append(companyName);

            const yearsEmployed = document.createElement("p");
            yearsEmployed.innerText = `Years Employed: ${element.yearsEmployed}`;
            container.append(yearsEmployed);
        }
    }
    catch (error)
    {
        console.error(error);
    }
}