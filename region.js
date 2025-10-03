let champ = JSON.parse(localStorage.getItem("champions")) || [
    {
        champion : "Aatrox",
        image : "images/CHAMP LOL/Aatrox.png",
        firstRole : "top",
        secondRole : "none",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Ahri",
        image : "images/CHAMP LOL/Ahri.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Akali",
        image : "images/CHAMP LOL/akali.png",
        firstRole : "top",
        secondRole : "mid",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Akshan",
        image : "images/CHAMP LOL/Akshan.png",
        firstRole : "mid",
        secondRole : "top",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Alistar",
        image : "images/CHAMP LOL/Alistar.png",
        firstRole : "supp",
        secondRole : "top",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Ambessa",
        image : "images/CHAMP LOL/Ambessa.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Amumu",
        image : "images/CHAMP LOL/Amumu.png",
        firstRole : "jungle",
        secondRole : "supp",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Anivia",
        image : "images/CHAMP LOL/Anivia.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Annie",
        image : "images/CHAMP LOL/Annie.png",
        firstRole : "mid",
        secondRole : "supp",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Aphelios",
        image : "images/CHAMP LOL/Aphelios.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "targon",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Ashe",
        image : "images/CHAMP LOL/Ashe.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Aurelion Sol",
        image : "images/CHAMP LOL/Aurelion sol.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "targon",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Aurora",
        image : "images/CHAMP LOL/Aurora.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Azir",
        image : "images/CHAMP LOL/Azir.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Bard",
        image : "images/CHAMP LOL/Bard.png",
        firstRole : "supp",
        secondRole : "none",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Bel'Veth",
        image : "images/CHAMP LOL/Bel'veth.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "neant",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Blitzcrank",
        image : "images/CHAMP LOL/Blitzcrank.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Brand",
        image : "images/CHAMP LOL/Brand.png",
        firstRole : "mid",
        secondRole : "supp",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Braum",
        image : "images/CHAMP LOL/Braum.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Briar",
        image : "images/CHAMP LOL/Briar.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Caitlyn",
        image : "images/CHAMP LOL/Caitlyn.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "piltover",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Camille",
        image : "images/CHAMP LOL/Camille.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "piltover",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Cassiopeia",
        image : "images/CHAMP LOL/Cassio.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Cho'Gath",
        image : "images/CHAMP LOL/Cho'gath.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "neant",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Corki",
        image : "images/CHAMP LOL/Corki.png",
        firstRole : "mid",
        secondRole : "bot",
        firstRegion : "bandle",
        secondRegion : "piltover", 
        hiden : false,
        activeRole : false
    },
        {
        champion : "Darius",
        image : "images/CHAMP LOL/Darius.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Diana",
        image : "images/CHAMP LOL/Diana.png",
        firstRole : "mid",
        secondRole : "jungle",
        firstRegion : "targon",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Dr Mundo",
        image : "images/CHAMP LOL/Dr Mundo.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Draven",
        image : "images/CHAMP LOL/Draven.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Ekko",
        image : "images/CHAMP LOL/Ekko.png",
        firstRole : "mid",
        secondRole : "jungle",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Elise",
        image : "images/CHAMP LOL/Elise.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Evelynn",
        image : "images/CHAMP LOL/Evelynn.png",
        firstRole : "jungle",
        secondRole : "none",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Ezreal",
        image : "images/CHAMP LOL/Ezreal.png",
        firstRole : "bot",
        secondRole : "mid",
        firstRegion : "piltover",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Fiddlesticks",
        image : "images/CHAMP LOL/Fiddle.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Fiora",
        image : "images/CHAMP LOL/Fiora.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Fizz",
        image : "images/CHAMP LOL/Fizz.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "bandle",
        secondRegion : "bilgewater",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Galio",
        image : "images/CHAMP LOL/Galio.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Gangplank",
        image : "images/CHAMP LOL/Gangplank.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "bilgewater",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Garen",
        image : "images/CHAMP LOL/Garen.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Gnar",
        image : "images/CHAMP LOL/Gnar.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "bandle",
        secondRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Gragas",
        image : "images/CHAMP LOL/Gragas.png",
        firstRole : "top",
        secondRole : "mid",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Graves",
        image : "images/CHAMP LOL/Graves.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "bilgewater",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Gwen",
        image : "images/CHAMP LOL/Gwen.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Hecarim",
        image : "images/CHAMP LOL/Hecarim.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Heimerdinger",
        image : "images/CHAMP LOL/Heimerdinger.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "bandle",
        secondRegion : "piltover",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Hwei",
        image : "images/CHAMP LOL/Hwei.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Illaoi",
        image : "images/CHAMP LOL/Illaoi.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "bilgewater",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Irelia",
        image : "images/CHAMP LOL/Irelia.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Ivern",
        image : "images/CHAMP LOL/Ivern.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Janna",
        image : "images/CHAMP LOL/Janna.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Jarvan IV",
        image : "images/CHAMP LOL/Jarvan IV.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Jax",
        image : "images/CHAMP LOL/Jax.png",
        firstRole : "top",
        secondRole : "jungle",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Jayce",
        image : "images/CHAMP LOL/Jayce.png",
        firstRole : "top",
        secondRole : "mid",
        firstRegion : "piltover",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Jhin",
        image : "images/CHAMP LOL/Jhin.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Jinx",
        image : "images/CHAMP LOL/Jinx.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "K'santé",
        image : "images/CHAMP LOL/K'sante.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Kai'Sa",
        image : "images/CHAMP LOL/Kai'sa.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "neant",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Kalista",
        image : "images/CHAMP LOL/Kalista.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Karma",
        image : "images/CHAMP LOL/Karma.png",
        firstRole : "supp",
        secondRole : "mid",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Karthus",
        image : "images/CHAMP LOL/Karthus.png",
        firstRole : "jungle",
        secondRole : "mid",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Kassadin",
        image : "images/CHAMP LOL/Kassadin.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "neant",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Katarina",
        image : "images/CHAMP LOL/Katarina.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Kayle",
        image : "images/CHAMP LOL/Kayle.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Kayn",
        image : "images/CHAMP LOL/Kayn.png",
        firstRole : "jungle",
        secondRole : "top",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Kennen",
        image : "images/CHAMP LOL/Kennen.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "bandle",
        secondRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Kha'Zix",
        image : "images/CHAMP LOL/Kha zix.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "neant",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Kindred",
        image : "images/CHAMP LOL/Kindred.png",
        firstRole : "jungle",
        secondRole : "none",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Kled",
        image : "images/CHAMP LOL/Kled.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "bandle",
        secondRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Kog'Maw",
        image : "images/CHAMP LOL/Kog'maw.png",
        firstRole : "bot",
        secondRole : "mid",
        firstRegion : "neant",
        hiden : false,
        activeRole : false
    },
        {
        champion : "LeBlanc",
        image : "images/CHAMP LOL/Leblanc.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Lee Sin",
        image : "images/CHAMP LOL/Lee sin.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Leona",
        image : "images/CHAMP LOL/Leona.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "targon",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Lillia",
        image : "images/CHAMP LOL/Lillia.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Lissandra",
        image : "images/CHAMP LOL/Lissandra.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Lucian",
        image : "images/CHAMP LOL/Lucian.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Lulu",
        image : "images/CHAMP LOL/Lulu.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "bandle",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Lux",
        image : "images/CHAMP LOL/Lux.png",
        firstRole : "mid",
        secondRole : "supp",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Maître Yi",
        image : "images/CHAMP LOL/Maître Yi.png",
        firstRole : "jungle",
        secondRole : "top",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Malphite",
        image : "images/CHAMP LOL/Malphite.png",
        firstRole : "top",
        secondRole : "mid",
        firstRegion : "ixtal",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Malzahar",
        image : "images/CHAMP LOL/Malzahar.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "neant",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Maokai",
        image : "images/CHAMP LOL/Maokai.png",
        firstRole : "top",
        secondRole : "supp",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Mel",
        image : "images/CHAMP LOL/Mel.png",
        firstRole : "mid",
        secondRole : "supp",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Milio",
        image : "images/CHAMP LOL/Milio.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "ixtal",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Miss Fortune",
        image : "images/CHAMP LOL/Miss Fortune.png",
        firstRole : "bot",
        secondRole : "mid",
        firstRegion : "bilgewater",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Mordekaiser",
        image : "images/CHAMP LOL/Mordekaiseur.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Morgana",
        image : "images/CHAMP LOL/Morgana.png",
        firstRole : "mid",
        secondRole : "supp",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Naafiri",
        image : "images/CHAMP LOL/Naafiri.png",
        firstRole : "mid",
        secondRole : "jungle",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Nami",
        image : "images/CHAMP LOL/Nami.png",
        firstRole : "supp",
        secondRole : "none",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Nasus",
        image : "images/CHAMP LOL/Nasus.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Nautilus",
        image : "images/CHAMP LOL/Nautilus.png",
        firstRole : "top",
        secondRole : "supp",
        firstRegion : "bilgewater",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Neeko",
        image : "images/CHAMP LOL/Neeko.png",
        firstRole : "mid",
        secondRole : "supp",
        firstRegion : "ixtal",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Nidalee",
        image : "images/CHAMP LOL/Nidalee.png",
        firstRole : "jungle",
        secondRole : "bot",
        firstRegion : "ixtal",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Nilah",
        image : "images/CHAMP LOL/Nilah.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "bilgewater",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Nocturne",
        image : "images/CHAMP LOL/Nocturne.png",
        firstRole : "jungle",
        secondRole : "none",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Nunu",
        image : "images/CHAMP LOL/Nunu.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Olaf",
        image : "images/CHAMP LOL/Olaf.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Orianna",
        image : "images/CHAMP LOL/Orianna.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "piltover",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Ornn",
        image : "images/CHAMP LOL/Ornn.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Pantheon",
        image : "images/CHAMP LOL/Panthéon.png",
        firstRole : "top",
        secondRole : "supp",
        firstRegion : "targon",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Poppy",
        image : "images/CHAMP LOL/Poppy.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "bandle",
        secondRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Pyke",
        image : "images/CHAMP LOL/Pyke.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "bilgewater",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Qiyana",
        image : "images/CHAMP LOL/Qiyana.png",
        firstRole : "mid",
        secondRole : "jungle",
        firstRegion : "ixtal",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Quinn",
        image : "images/CHAMP LOL/Quinn.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Rakan",
        image : "images/CHAMP LOL/Rakan.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Rammus",
        image : "images/CHAMP LOL/Rammus.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Rek'Sai",
        image : "images/CHAMP LOL/rek'sai.png",
        firstRole : "jungle",
        secondRole : "top",
        firstRegion : "neant",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Rell",
        image : "images/CHAMP LOL/Rell.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Renata Glasc",
        image : "images/CHAMP LOL/Renata Glasc.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Renekton",
        image : "images/CHAMP LOL/Renekton.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Rengar",
        image : "images/CHAMP LOL/Rengar.png",
        firstRole : "jungle",
        secondRole : "top",
        firstRegion : "ixtal",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Riven",
        image : "images/CHAMP LOL/Riven.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Rumble",
        image : "images/CHAMP LOL/Rumble.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "bandle",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Ryze",
        image : "images/CHAMP LOL/Ryze.png",
        firstRole : "mid",
        secondRole : "none",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Samira",
        image : "images/CHAMP LOL/Samira.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Sejuani",
        image : "images/CHAMP LOL/Sejuani.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Senna",
        image : "images/CHAMP LOL/Senna.png",
        firstRole : "bot",
        secondRole : "supp",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Séraphine",
        image : "images/CHAMP LOL/Seraphine.png",
        firstRole : "supp",
        secondRole : "mid",
        firstRegion : "piltover",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Sett",
        image : "images/CHAMP LOL/Sett.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Shaco",
        image : "images/CHAMP LOL/Shaco.png",
        firstRole : "jungle",
        secondRole : "supp",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Shen",
        image : "images/CHAMP LOL/Shen.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Shyvana",
        image : "images/CHAMP LOL/Shyvana.png",
        firstRole : "jungle",
        secondRole : "top",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Singed",
        image : "images/CHAMP LOL/Singed.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Sion",
        image : "images/CHAMP LOL/Sion.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Sivir",
        image : "images/CHAMP LOL/Sivir.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Skarner",
        image : "images/CHAMP LOL/Skarner.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "ixtal",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Smolder",
        image : "images/CHAMP LOL/Smolder.png",
        firstRole : "bot",
        secondRole : "none",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Sona",
        image : "images/CHAMP LOL/Sona.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Soraka",
        image : "images/CHAMP LOL/Soraka.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "targon",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Swain",
        image : "images/CHAMP LOL/Swain.png",
        firstRole : "mid",
        secondRole : "supp",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Sylas",
        image : "images/CHAMP LOL/Sylas.png",
        firstRole : "mid",
        secondRole : "jungle",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Syndra",
        image : "images/CHAMP LOL/Syndra.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Tahm Kench",
        image : "images/CHAMP LOL/Tahm Kench.png",
        firstRole : "top",
        secondRole : "supp",
        firstRegion : "bilgewater",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Taliyah",
        image : "images/CHAMP LOL/Taliyah.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Talon",
        image : "images/CHAMP LOL/Talon.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Taric",
        image : "images/CHAMP LOL/Taric.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "targon",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Teemo",
        image : "images/CHAMP LOL/Teemo.png",
        firstRole : "top",
        secondRole : "mid",
        firstRegion : "bandle",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Thresh",
        image : "images/CHAMP LOL/Thresh.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Tristana",
        image : "images/CHAMP LOL/tristana.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "bandle",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Trundle",
        image : "images/CHAMP LOL/Trundle.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Tryndamere",
        image : "images/CHAMP LOL/Trynda.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Twisted Fate",
        image : "images/CHAMP LOL/Twisted Fate.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "bilgewater",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Twitch",
        image : "images/CHAMP LOL/Twitch.png",
        firstRole : "bot",
        secondRole : "mid",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Udyr",
        image : "images/CHAMP LOL/Udyr.png",
        firstRole : "jungle",
        secondRole : "top",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Urgot",
        image : "images/CHAMP LOL/Urgot.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Varus",
        image : "images/CHAMP LOL/Varus.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Vayne",
        image : "images/CHAMP LOL/Vayne.png",
        firstRole : "bot",
        secondRole : "jungle",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Veigar",
        image : "images/CHAMP LOL/Veigar.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "bandle",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Vel'Koz",
        image : "images/CHAMP LOL/Vel'koz.png",
        firstRole : "mid",
        secondRole : "supp",
        firstRegion : "neant",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Vex",
        image : "images/CHAMP LOL/Vex.png",
        firstRole : "mid",
        secondRole : "supp",
        firstRegion : "bandle",
        secondRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Vi",
        image : "images/CHAMP LOL/Vi.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "piltover",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Viego",
        image : "images/CHAMP LOL/Viego.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Viktor",
        image : "images/CHAMP LOL/Viktor.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Vladimir",
        image : "images/CHAMP LOL/Vlad.png",
        firstRole : "top",
        secondRole : "mid",
        firstRegion : "noxus",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Volibear",
        image : "images/CHAMP LOL/Voli.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "freljord",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Warwick",
        image : "images/CHAMP LOL/Warwick.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Wukong",
        image : "images/CHAMP LOL/Wukong.png",
        firstRole : "top",
        secondRole : "jungle",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Xayah",
        image : "images/CHAMP LOL/Xayah.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Xerath",
        image : "images/CHAMP LOL/Xerath.png",
        firstRole : "mid",
        secondRole : "supp",
        firstRegion : "shurima",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Xin Zhao",
        image : "images/CHAMP LOL/Xin xhao.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "demacia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Yasuo",
        image : "images/CHAMP LOL/Yasuo.png",
        firstRole : "top",
        secondRole : "mid",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Yone",
        image : "images/CHAMP LOL/Yone.png",
        firstRole : "top",
        secondRole : "mid",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Yorick",
        image : "images/CHAMP LOL/Yorick.png",
        firstRole : "top",
        secondRole : "none",
        firstRegion : "si",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Yunara",
        image : "images/CHAMP LOL/Yunara.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Yuumi",
        image : "images/CHAMP LOL/Yuumi.png",
        firstRole : "supp",
        secondRole : "none",
        firstRegion : "bandle",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Zac",
        image : "images/CHAMP LOL/Zac.png",
        firstRole : "jungle",
        secondRole : "none",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Zed",
        image : "images/CHAMP LOL/Zed.png",
        firstRole : "mid",
        secondRole : "jungle",
        firstRegion : "ionia",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Zeri",
        image : "images/CHAMP LOL/Zeri.png",
        firstRole : "bot",
        secondRole : "none",
        firstRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Ziggs",
        image : "images/CHAMP LOL/Ziggs.png",
        firstRole : "mid",
        secondRole : "bot",
        firstRegion : "bandle",
        secondRegion : "zaun",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Zilean",
        image : "images/CHAMP LOL/Zilean.png",
        firstRole : "supp",
        secondRole : "mid",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Zoé",
        image : "images/CHAMP LOL/Zoé.png",
        firstRole : "mid",
        secondRole : "none",
        firstRegion : "targon",
        hiden : false,
        activeRole : false
    },
        {
        champion : "Zyra",
        image : "images/CHAMP LOL/Zyra.png",
        firstRole : "mid",
        secondRole : "supp",
        firstRegion : "ixtal",
        hiden : false,
        activeRole : false
    },
];


let currentRegionFilter = null;

// Récupère UN élément par colonne (si tu en as un seul par rôle)
const boxRoleTop    = document.querySelector(".boxRoleTop");
const boxRoleJungle = document.querySelector(".boxRoleJungle");
const boxRoleMid    = document.querySelector(".boxRoleMid");
const boxRoleBot    = document.querySelector(".boxRoleBot");
const boxRoleSupp   = document.querySelector(".boxRoleSupp");

function setRegion(region) {
  if (currentRegionFilter !== null && currentRegionFilter === region) return;
  currentRegionFilter = region;

  // Vide les colonnes
  [boxRoleTop, boxRoleJungle, boxRoleMid, boxRoleBot, boxRoleSupp].forEach(box => {
    if (box) box.innerHTML = "";
  });

  champ.forEach(champion => {
    const inRegion =
      champion.firstRegion === region ||
      champion.secondRegion === region; // ok si secondRegion est undefined

    if (!inRegion) return;

    // petite fabrique d'image pour éviter de réutiliser le même node
    const makeImg = () => {
      const img = document.createElement("img");
      img.classList.add("champImage");
      img.src = champion.image;
      img.alt = champion.champion;
      return img;
    };

    const roles = new Set([champion.firstRole, champion.secondRole]);

    if (roles.has("top")    && boxRoleTop)    boxRoleTop.appendChild(makeImg());
    if (roles.has("jungle") && boxRoleJungle) boxRoleJungle.appendChild(makeImg());
    if (roles.has("mid")    && boxRoleMid)    boxRoleMid.appendChild(makeImg());
    if (roles.has("bot")    && boxRoleBot)    boxRoleBot.appendChild(makeImg());
    if (roles.has("supp")   && boxRoleSupp)   boxRoleSupp.appendChild(makeImg());
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const regions = {
    zaun: document.querySelector('.regionZaun'),
    bandle: document.querySelector('.regionBandle'),
    bilgewater: document.querySelector('.regionBilgewater'),
    demacia: document.querySelector('.regionDemacia'),
    freljord: document.querySelector('.regionFreljord'),
    ionia: document.querySelector('.regionIonia'),
    noxus: document.querySelector('.regionNoxus'),
    piltover: document.querySelector('.regionPiltover'),
    si: document.querySelector('.regionSi'),
    shurima: document.querySelector('.regionShurima'),
    targon: document.querySelector('.regionTargon'),
    neant: document.querySelector('.regionNeant'),
    ixtal: document.querySelector('.regionIxtal'),
  };

  Object.entries(regions).forEach(([region, btn]) => {
    if (!btn) return;
    btn.addEventListener('click', () => setRegion(region));
  });
});