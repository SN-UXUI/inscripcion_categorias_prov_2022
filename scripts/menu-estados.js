        function sel_inicio() {
            document.getElementById("inicio_icon").style.display = "flex";
            document.getElementById("inicio_text").style.opacity = "100%";
            document.getElementById("selec_icon").style.display = "none";
            document.getElementById("selec_text").style.opacity = "40%";
            document.getElementById("perfil_icon").style.display = "none";
            document.getElementById("perfil_text").style.opacity = "40%";
            document.getElementById("resu_icon").style.display = "none";
            document.getElementById("resu_text").style.opacity = "40%";
        }

        function sel_seleccion() {
            document.getElementById("inicio_icon").style.display = "none";
            document.getElementById("inicio_text").style.opacity = "40%";
            document.getElementById("selec_icon").style.display = "flex";
            document.getElementById("selec_text").style.opacity = "100%";
            document.getElementById("perfil_icon").style.display = "none";
            document.getElementById("perfil_text").style.opacity = "40%";
            document.getElementById("resu_icon").style.display = "none";
            document.getElementById("resu_text").style.opacity = "40%";
        }

        function sel_perfil() {
            document.getElementById("inicio_icon").style.display = "none";
            document.getElementById("inicio_text").style.opacity = "40%";
            document.getElementById("selec_icon").style.display = "none";
            document.getElementById("selec_text").style.opacity = "40%";
            document.getElementById("perfil_icon").style.display = "flex";
            document.getElementById("perfil_text").style.opacity = "100%";
            document.getElementById("resu_icon").style.display = "none";
            document.getElementById("resu_text").style.opacity = "40%";
        }

        function sel_resumen() {
            document.getElementById("inicio_icon").style.display = "none";
            document.getElementById("inicio_text").style.opacity = "40%";
            document.getElementById("selec_icon").style.display = "none";
            document.getElementById("selec_text").style.opacity = "40%";
            document.getElementById("perfil_icon").style.display = "none";
            document.getElementById("perfil_text").style.opacity = "40%";
            document.getElementById("resu_icon").style.display = "flex";
            document.getElementById("resu_text").style.opacity = "100%";
        }