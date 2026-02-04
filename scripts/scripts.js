/* app.js
   Responsável por injetar os dados e simular troca de temporada / interações.
   Simples de estender para APIs reais.
*/

const seasonsData = {
  "2025":  [
     { pos: 1, name: "Cágados", logo:"imgs/LAGOA DOS CAGADOS.png", pts: 25, pj: 10, v: 7, e: 1, d: 2, gp: 18, gc: 6, form:["loss","win","win","win","win"] },
  { pos: 2, name: "Ouricuri", logo:"imgs/OURICURI.png", pts: 18, pj: 10, v: 5, e: 3, d: 2, gp: 14, gc: 8, form:["win","loss","win","draw","draw"] },

  { pos: 3, name: "Alto", logo:"imgs/ALTO.png", pts: 17, pj: 8, v: 5, e: 2, d: 1, gp: 13, gc: 5, form:["loss","draw","draw","win","win"] },

  { pos: 4, name: "Algodões", logo:"imgs/ALGODOESESCUDO.png", pts: 15, pj: 6, v: 5, e: 0, d: 1, gp: 12, gc: 3, form:["win","win","win","loss","win"] },

  { pos: 5, name: "Lagoa do Garrote", logo:"imgs/GARROTE.png", pts: 12, pj: 6, v: 4, e: 0, d: 2, gp: 10, gc: 3, form:["draw","win","loss","win","win"] },

  { pos: 6, name: "Pascoal", logo:"imgs/PASCOAL.png", pts: 11, pj: 6, v: 3, e: 2, d: 1, gp: 2, gc: 4, form:["draw","win","win","draw","loss"] },

  { pos: 7, name: "Lagoa da Ema", logo:"imgs/LAGOA DA EMA.png", pts: 10, pj: 8, v: 3, e: 1, d: 4, gp: 8, gc: 5, form:["loss","loss","win","win","draw"] },

  { pos: 8, name: "Lagoa da Barra", logo:"imgs/ANACONDA.png", pts: 8, pj: 6, v: 2, e: 2, d: 2, gp: 5, gc: 1, form:["win","draw","win","draw","loss"] },

 { pos: 9, name: "Poço Dantas - Desclassificado", logo:"imgs/PINHEIRÃO.png", pts: 4, pj: 2, v: 1, e: 1, d: 0, gp: 3, gc: 2, form:["win","draw","draw","draw","draw"] },
    { pos: 10, name: "Lagoa do Fechado", logo:"imgs/JUVENTUS FECHADO.png", pts: 4, pj: 2, v: 1, e: 1, d: 1, gp: 5, gc: 2, form:["win","loss","draw","draw","draw"] },
    { pos: 11, name: "Tanque do Rumo", logo:"imgs/ADESTRU.png", pts: 4, pj: 4, v: 1, e: 1, d: 2, gp: 2, gc: 4, form:["draw","draw","loss","draw","draw"] },
    { pos: 12, name: "Jurema", logo:"imgs/JUREMA.png", pts: 3, pj: 4, v: 1, e: 0, d: 3, gp: 2, gc: 9, form:["win","draw","loss","draw","draw"] },
    { pos: 13, name: "Vila Manancial", logo:"imgs/VILA MANANCIAL.png", pts: 3, pj: 4, v: 1, e: 0, d: 3, gp: 4, gc: 11, form:["loss","win","loss","loss"] },
    { pos: 14, name: "Tatu", logo:"imgs/TATU.png", pts: 3, pj: 4, v: 0, e: 3, d: 1, gp: 5, gc: 7, form:["draw","draw","draw","loss"] },
    { pos: 15, name: "Baraúnas", logo:"imgs/BARAÚNAS.png", pts: 2, pj: 2, v: 0, e: 2, d: 0, gp: 3, gc: 3, form:["draw","draw","draw","draw","draw"] },
    { pos: 16, name: "Pedro Caipira", logo:"imgs/LAGOA DO OLIMPIO.png", pts: 2, pj: 4, v: 0, e: 2, d: 1, gp: 1, gc: 2, form:["draw","draw","loss","draw"] },
    { pos: 17, name: "Novo Triunfo", logo:"imgs/NOVO TRIUNFO.png", pts: 1, pj: 2, v: 0, e: 1, d: 0, gp: 0, gc: 0, form:["draw","draw"] },
    { pos: 18, name: "Lagoinha das Pedras", logo:"imgs/LAGOINHA DAS PEDRAS.png", pts: 1, pj: 3, v: 0, e: 1, d: 2, gp: 3, gc: 8, form:["loss","draw","loss","draw"] },
    { pos: 19, name: "Capoeira", logo:"imgs/capoeira.jpeg", pts: 1, pj: 2, v: 0, e: 1, d: 1, gp: 0, gc: 2, form:["draw","win"] },
    { pos: 20, name: "Baixa da Luva", logo:"imgs/UNIÃO LUVENSE.png", pts: 0, pj: 2, v: 0, e: 1, d: 0, gp: 1, gc: 1, form:["draw","draw"] },
    { pos: 21, name: "Boa vista", logo:"imgs/BOA VISTA.png", pts: 0, pj: 2, v: 0, e: 0, d: 2, gp: 1, gc: 3, form:["loss","loss"] },
    { pos: 22, name: "Monte Cruzeiro", logo:"imgs/MONTE CRUZEIRO.png", pts: 0, pj: 2, v: 0, e: 0, d: 1, gp: 1, gc: 4, form:["loss","draw"] },
    { pos: 23, name: "Pau de Rato", logo:"imgs/PAU DE RATO.png", pts: 0, pj: 2, v: 0, e: 0, d: 2, gp: 1, gc: 5, form:["loss","loss"] },
    { pos: 24, name: "Capim Grosso", logo:"imgs/CAPIM GROSSO.png", pts: 0, pj: 2, v: 0, e: 0, d: 2, gp: 0, gc: 4, form:["loss","loss"] },
    { pos: 25, name: "Sobara", logo:"imgs/SOBARA.png", pts: 0, pj: 2, v: 0, e: 0, d: 1, gp: 0, gc: 6, form:["loss","loss"] },
    { pos: 26, name: "Terra Nova", logo:"imgs/TERRA NOVA.png", pts: 0, pj: 2, v: 0, e: 0, d: 2, gp: 0, gc: 6, form:["loss","loss"] }
  ],
  // "2026": [
  //   // dados exemplo 2023 — você pode trocar por API futuramente
  //   {
  //     pos:1,
  //     name:"Palmeiras",
  //     logo:"",
  //     pts:61,pj:38,v:18,e:7,d:13,gp:67,gc:43,
  //     form:["win","win","draw","win","win"]
  //   },
  //   { pos: 2, name: "Corinthians", logo:"https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png", pts: 63, pj: 38, v: 18, e: 9, d: 11, gp: 56, gc: 42, form:["win","draw","win","draw","win"] }, 
  //   { pos: 3, name: "Flamengo", logo:"", pts: 61, pj: 38, v: 18, e: 7, d: 13, gp: 65, gc: 49, form:["win","win","loss","win","draw"] },
  //   { pos: 4, name: "Internacional", logo:"", pts: 59, pj: 38, v: 17, e: 8, d: 13, gp: 58, gc: 40, form:["win","draw","win","loss","win"] },
  // ]
};

/* função que escolhe a zona (classe CSS) baseado na posição — igual imagem */
function zoneClass(pos) {
  if(pos === 4) return "qua";
  if (pos === 9) return "rebaixado";
  if (pos >= 17) return "rebaixado";

  if(pos === 1) return "cam";


  if (pos === 1 || pos === 2) return "fin";

  if (pos === 3 || pos === 7) return "sem";


  if (pos === 5 || pos === 6 || pos === 8) return "qua";

  if (pos <= 8) return "sula";

  if (pos >= 10) return "oit";

  return "";
}


/* gera forma recente aleatória mas com controle para ficar verossímil */
function genForm(seed) {
  // seed pode ser pos pra previsibilidade
  const rand = (i) => Math.abs(Math.sin(i * 9301 + 49297)) % 1;
  const arr = [];
  for (let i = 0; i < 5; i++) {
    const r = Math.floor(rand(seed + i) * 3);
    arr.push(r === 0 ? "win" : r === 1 ? "draw" : "loss");
  }
  return arr;
}

/* cria uma "logo" circular com iniciais */
function makeLogo(name) {
  const initials = name.split(" ").map(s => s[0]).slice(0, 2).join('').toUpperCase();
  // cores simples por hash
  let hash = 0; for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const colors = ["#1abc9c", "#3498db", "#9b59b6", "#e67e22", "#e74c3c", "#2ecc71", "#f39c12", "#16a085"];
  const color = colors[Math.abs(hash) % colors.length];
  return { initials, color };
}

/* renderiza a tabela */
function renderTable(season) {
  const data = seasonsData[season] || [];
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  data.forEach(team => {
    const tr = document.createElement("tr");
    tr.className = zoneClass(team.pos);

    // unused fallback logo object (mantido por compatibilidade com sua lógica)
    const logoObj = makeLogo(team.name);
    const sg = team.gp - team.gc;

    // montar as últimas 5
    const form = team.form || genForm(team.pos);
    const formHtml = form.map(f => `<span class="dot ${f}"></span>`).join("");

    // construir HTML da célula do clube com fallback para quando não houver imagem
    const clubLogoHtml = team.logo
      ? `<img class="logo-img" src="${team.logo}" alt="${team.name}" onerror="this.onerror=null;this.outerHTML='<div class=\\'logo-fallback\\'>${team.name[0]}<\\/div>'">`
      : `<div class="logo-fallback">${team.name[0]}</div>`;

    tr.innerHTML = `
      <td class="col-pos"><div class="position">${team.pos}</div></td>
      <td class="col-club">
         <div class="club-cell">
          ${clubLogoHtml}
          <div>
            <div class="club-name">${team.name}</div>
            <small style="color:var(--muted)">${team.gp} GP • ${team.gc} GC</small>
          </div>
        </div>
      </td>
      <td class="col-pts">${team.pts}</td>
      <td class="col-pj">${team.pj}</td>
      <td class="col-v">${team.v}</td>
      <td class="col-e">${team.e}</td>
      <td class="col-d">${team.d}</td>
      <td class="col-gp">${team.gp}</td>
      <td class="col-gc">${team.gc}</td>
      <td class="col-sg ${sg > 0 ? 'sg-pos' : (sg < 0 ? 'sg-neg' : 'sg-zero')}">${sg > 0 ? '+' + sg : sg}</td>
      <td class="col-form"><div class="form">${formHtml}</div></td>
    `;
    tbody.appendChild(tr);
  });
}

/* inicial */
document.addEventListener("DOMContentLoaded", () => {
  const seasonSelect = document.getElementById("season");
  // se não tiver elemento season (por segurança), escolhe 2022
  const initialSeason = (seasonSelect && seasonSelect.value) ? seasonSelect.value : "2025";
  renderTable(initialSeason);

  if (seasonSelect) {
    seasonSelect.addEventListener("change", (e) => {
      renderTable(e.target.value);
    });
  }

  // links do topo: troca de classe active (só visual, cada link já tem href para a seção)
  document.querySelectorAll('.topnav .nav-link').forEach(link => {
    link.addEventListener('click', function (ev) {
      document.querySelectorAll('.topnav .nav-link').forEach(n => n.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
