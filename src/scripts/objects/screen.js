const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                            <div clas="data">
                                <h1>${user.name ?? 'Nao possui nome cadastrado😢'}</h1>
                                <p>${user.bio ?? 'Nao possui bio cadastrada 😢'}</p>
                                <div class='seguidores'>
                                    <p>${'👣' + user.following + ' seguindo' ?? 'Nao segue ninguém 😢'}</p>
                                    <p>${'👥' + user.followers + ' seguidores' ?? 'Nao possui seguidores 😢'}</p>
                                </div>
                            </div>
                        </div>`     
                        
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">
                                                                        <div class="repo-name">${repo.name}</div>
                                                                        <div class="repo-details">
                                                                            <span>${'🍴 ' + repo.forks}</span>
                                                                            <span>${'⭐ ' + repo.stargazers_count}</span>
                                                                            <span>${'👀 ' + repo.watchers}</span>
                                                                            <span>${'🧑‍💻 ' + repo.language}</span>
                                                                        </div>
                                                                    </a>
                                                                </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML +=  `<div class="repositories section">
                                             <h2>Repositórios</h2>
                                             <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let createEventsitens = ''
        user.createEvents.forEach(event => createEventsitens += `<li><span>${event.repo.name}</span>  - Sem mensagem de commit</li>`)

        let pushEventsitens = '';
        user.pushEvents.forEach(event => {
            event.payload.commits.forEach(commit => {
                pushEventsitens += `<li><span>${event.repo.name}</span>  - ${commit.message}</li>`;
            });
        });

        this.userProfile.innerHTML += `<div class="events">
                                        <h2>Eventos</h2>
                                        <ul>${createEventsitens}</ul>
                                        <ul>${pushEventsitens}</ul>`

         
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }