document.addEventListener("DOMContentLoaded", function () {
    let games = document.querySelectorAll(".games")
    let content = document.querySelectorAll(".content__development")
    let aplica = document.querySelectorAll(".applications")
    let main = document.querySelector(".projects-list").childElementCount;

    document.querySelector(".f_games").onclick = () => {
        for (let game of games) {
            game.classList.remove("none");
        }
        for (let aplic of aplica) {
            aplic.classList.add("none");
        }
        for (let conten of content) {
            conten.classList.add("none");
        }
        document.querySelector(".f_all").classList.remove("active");
        document.querySelector(".f_games").classList.add("active");
        document.querySelector(".f_application").classList.remove("active");
        document.querySelector(".f_contentdev").classList.remove("active");
    };
    document.querySelector(".f_application").onclick = () => {
        for (let game of games) {
            game.classList.add("none");
        }
        for (let aplic of aplica) {
            aplic.classList.remove("none");
        }
        for (let conten of content) {
            conten.classList.add("none");
        }
        document.querySelector(".f_all").classList.remove("active");
        document.querySelector(".f_games").classList.remove("active");
        document.querySelector(".f_application").classList.add("active");
        document.querySelector(".f_contentdev").classList.remove("active");
    }
    document.querySelector(".f_contentdev").onclick = () => {
        for (let game of games) {
            game.classList.add("none");
        }
        for (let aplic of aplica) {
            aplic.classList.add("none");
        }
        for (let conten of content) {
            conten.classList.remove("none");
        }
        document.querySelector(".f_all").classList.remove("active");
        document.querySelector(".f_games").classList.remove("active");
        document.querySelector(".f_application").classList.remove("active");
        document.querySelector(".f_contentdev").classList.add("active");
    }
    document.querySelector(".f_all").onclick = () => {
        for (let game of games) {
            game.classList.remove("none");
        }
        for (let aplic of aplica) {
            aplic.classList.remove("none");
        }
        for (let conten of content) {
            conten.classList.remove("none");
        }
        document.querySelector(".f_all").classList.add("active");
        document.querySelector(".f_games").classList.remove("active");
        document.querySelector(".f_application").classList.remove("active");
        document.querySelector(".f_contentdev").classList.remove("active");
    }
    let latestpost = document.querySelector("#latestpost");
    let latest_post = document.querySelector(".latest-post");
    let appdesign = document.querySelector("#appdesign");
    let app_design = document.querySelector(".app-design");
    let appdevelopment = document.querySelector("#appdevelopment");
    let app_development = document.querySelector(".app-development");
    let designsolutions = document.querySelector("#designsolutions");
    let design_solutions = document.querySelector(".design-solutions");
    let qualityassurance = document.querySelector(".qualityassurance");
    let quality_assurance = document.querySelector(".quality-assurance");
    let developmentmode = document.querySelector(".developmentmode");
    let development_mode = document.querySelector(".development-mode");
    let outthere = document.querySelector("#outthere");
    let out_there = document.querySelector(".out-there");
    latest_post.style.display = "grid";
    app_design.style.display = "none";
    app_development.style.display = "none";
    design_solutions.style.display = "none";
    quality_assurance.style.display = "none";
    development_mode.style.display = "none";
    out_there.style.display = "none";

    latestpost.style.color = "rgb(255, 198, 0)";
    appdesign.style.color = "rgb(0, 0, 0)";
    appdevelopment.style.color = "rgb(0, 0, 0)";
    designsolutions.style.color = "rgb(0, 0, 0)";
    qualityassurance.style.color = "rgb(0, 0, 0)";
    developmentmode.style.color = "rgb(0, 0, 0)";
    outthere.style.color = "rgb(0, 0, 0)";
    latestpost.addEventListener("click", () => {
        latest_post.style.display = "grid";
        app_design.style.display = "none";
        app_development.style.display = "none";
        design_solutions.style.display = "none";
        quality_assurance.style.display = "none";
        development_mode.style.display = "none";
        out_there.style.display = "none";

        latestpost.style.color = "rgb(255, 198, 0)";
        appdesign.style.color = "rgb(0, 0, 0)";
        appdevelopment.style.color = "rgb(0, 0, 0)";
        designsolutions.style.color = "rgb(0, 0, 0)";
        qualityassurance.style.color = "rgb(0, 0, 0)";
        developmentmode.style.color = "rgb(0, 0, 0)";
        outthere.style.color = "rgb(0, 0, 0)";
    });
    appdesign.addEventListener("click", () => {
        latest_post.style.display = "none";
        app_design.style.display = "grid";
        app_development.style.display = "none";
        design_solutions.style.display = "none";
        quality_assurance.style.display = "none";
        development_mode.style.display = "none";
        out_there.style.display = "none";

        latestpost.style.color = "rgb(0, 0, 0)";
        appdesign.style.color = "rgb(255, 198, 0)";
        appdevelopment.style.color = "rgb(0, 0, 0)";
        designsolutions.style.color = "rgb(0, 0, 0)";
        qualityassurance.style.color = "rgb(0, 0, 0)";
        developmentmode.style.color = "rgb(0, 0, 0)";
        outthere.style.color = "rgb(0, 0, 0)";
    });
    appdevelopment.addEventListener("click", () => {
        latest_post.style.display = "none";
        app_design.style.display = "none";
        app_development.style.display = "grid";
        design_solutions.style.display = "none";
        quality_assurance.style.display = "none";
        development_mode.style.display = "none";
        out_there.style.display = "none";

        latestpost.style.color = "rgb(0, 0, 0)";
        appdesign.style.color = "rgb(0, 0, 0)";
        appdevelopment.style.color = "rgb(255, 198, 0)";
        designsolutions.style.color = "rgb(0, 0, 0)";
        qualityassurance.style.color = "rgb(0, 0, 0)";
        developmentmode.style.color = "rgb(0, 0, 0)";
        outthere.style.color = "rgb(0, 0, 0)";
    });
    designsolutions.addEventListener("click", () => {
        latest_post.style.display = "none";
        app_design.style.display = "none";
        app_development.style.display = "none";
        design_solutions.style.display = "grid";
        quality_assurance.style.display = "none";
        development_mode.style.display = "none";
        out_there.style.display = "none";

        latestpost.style.color = "rgb(0, 0, 0)";
        appdesign.style.color = "rgb(0, 0, 0)";
        appdevelopment.style.color = "rgb(0, 0, 0)";
        designsolutions.style.color = "rgb(255, 198, 0)";
        qualityassurance.style.color = "rgb(0, 0, 0)";
        developmentmode.style.color = "rgb(0, 0, 0)";
        outthere.style.color = "rgb(0, 0, 0)";
    });
    qualityassurance.addEventListener("click", () => {
        latest_post.style.display = "none";
        app_design.style.display = "none";
        app_development.style.display = "none";
        design_solutions.style.display = "none";
        quality_assurance.style.display = "grid";
        development_mode.style.display = "none";
        out_there.style.display = "none";

        latestpost.style.color = "rgb(0, 0, 0)";
        appdesign.style.color = "rgb(0, 0, 0)";
        appdevelopment.style.color = "rgb(0, 0, 0)";
        designsolutions.style.color = "rgb(0, 0, 0)";
        qualityassurance.style.color = "rgb(255, 198, 0)";
        developmentmode.style.color = "rgb(0, 0, 0)";
        outthere.style.color = "rgb(0, 0, 0)";
    });
    developmentmode.addEventListener("click", () => {
        latest_post.style.display = "none";
        app_design.style.display = "none";
        app_development.style.display = "none";
        design_solutions.style.display = "none";
        quality_assurance.style.display = "none";
        development_mode.style.display = "grid";
        out_there.style.display = "none";

        latestpost.style.color = "rgb(0, 0, 0)";
        appdesign.style.color = "rgb(0, 0, 0)";
        appdevelopment.style.color = "rgb(0, 0, 0)";
        designsolutions.style.color = "rgb(0, 0, 0)";
        qualityassurance.style.color = "rgb(0, 0, 0)";
        developmentmode.style.color = "rgb(255, 198, 0)";
        outthere.style.color = "rgb(0, 0, 0)";
    });
    outthere.addEventListener("click", () => {
        latest_post.style.display = "none";
        app_design.style.display = "none";
        app_development.style.display = "none";
        design_solutions.style.display = "none";
        quality_assurance.style.display = "none";
        development_mode.style.display = "none";
        out_there.style.display = "grid";

        latestpost.style.color = "rgb(0, 0, 0)";
        appdesign.style.color = "rgb(0, 0, 0)";
        appdevelopment.style.color = "rgb(0, 0, 0)";
        designsolutions.style.color = "rgb(0, 0, 0)";
        qualityassurance.style.color = "rgb(0, 0, 0)";
        developmentmode.style.color = "rgb(0, 0, 0)";
        outthere.style.color = "rgb(255, 198, 0)";
    });

})
