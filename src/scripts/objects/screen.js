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

        let eventsItens = ''
        user.events.forEach(event => {
            if (event.type === 'PushEvent') {
                eventsItens += `<li>
                                    <h3>${event.repo.name}</h3>
                                    <p> -- ${event.payload.commits[0].message}</p>
                                </li>`
            }else{
                eventsItens += `<li>
                                    <h3>${event.repo.name}</h3>
                                    <p> -- Sem mensagem de commit</p>
                                </li>`
            };
        });
            
        this.userProfile.innerHTML += `<div class="events">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                        </div>`
   
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }