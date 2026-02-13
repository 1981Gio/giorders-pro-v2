// ==============================
// UI MODULE
// ==============================

function renderHome(app, data) {
    app.innerHTML = `
        <div class="screen">

            <div class="nav">
                <div class="nav-title">GiOrders Pro</div>
            </div>

            <div class="section">

                <div class="card">
                    <div class="card-title">Nuovo Evento</div>

                    <input id="evName" placeholder="Nome evento">

                    <select id="evType">
                        <option value="Abbigliamento">Abbigliamento</option>
                        <option value="Gadget">Gadget</option>
                        <option value="Bus">Bus</option>
                    </select>

                    <input id="evPrice" type="number" placeholder="Prezzo €">
                    <input id="evSeats" type="number" placeholder="Posti Bus (solo Bus)">

                    <button class="btn-primary" onclick="createEvent()">
                        Crea Evento
                    </button>
                </div>

            </div>

            <div class="section">

                <div class="card">
                    <div class="card-title">Eventi</div>

                    ${
                        data.events.length === 0
                        ? `<div class="empty">Nessun evento creato</div>`
                        : data.events.map((e,i)=>`
                            <div class="list-item">
                                <div>
                                    <div class="list-title">${e.name}</div>
                                    <div class="list-sub">${e.type}</div>
                                </div>
                                <div class="list-right">
                                    € ${e.price}
                                </div>
                            </div>
                        `).join("")
                    }

                </div>

            </div>

        </div>
    `;
}
