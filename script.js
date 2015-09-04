// Facebook's API is satan and requires access tokens;
// pretend this is fetched really nicely with some Ajax request.
var quotes = [
    { quote: '"Asså genghis khan är släkt me typ 3% av världen.. Han måste ha knullat typ... 7 pers"', url: "https://www.facebook.com/ShitLokeSays/posts/633195666784712" },
    { quote: '"Tänk dig ljudet av ett par tuttar som rör sig i mach 7, SLRPSLRPSLRPSLRP"', url: "https://www.facebook.com/ShitLokeSays/posts/611332492304363" },
    { quote: '"En katt burito is totally a thing now, Purrito"', url: "https://www.facebook.com/ShitLokeSays/posts/587670071337272" },
    { quote: '"Jag gjorde henne gravid med min härskar teknnik!"', url: "https://www.facebook.com/ShitLokeSays/posts/587669884670624" },
    { quote: '"Johnnys senap fick smaken från Hitler"', url: "https://www.facebook.com/ShitLokeSays/posts/579677378803208" },
    { quote: '"Zingo ger mig smak i mörkret!"', url: "https://www.facebook.com/ShitLokeSays/posts/510723532365260" },
    { quote: '"Hon har två extra hjärnor i tuttarna, hon är ju oövervinnerlig!"', url: "https://www.facebook.com/ShitLokeSays/posts/505955612842052" },
    { quote: '"David Battlebird"', url: "https://www.facebook.com/ShitLokeSays/posts/502003916570555" },
    { quote: '"Största krisen sossarna kan göra är nog om löfven snortar koks från en 3 årings rumpa och skriker all makt åt Danmark!"', url: "https://www.facebook.com/ShitLokeSays/posts/492446494192964" },
    { quote: '"Shit jag måste få igång mitt game, kan ju inte sitta här och vara mega Jesus"', url: "https://www.facebook.com/ShitLokeSays/posts/492374120866868" },
    { quote: 'Klockan är 1 på natten. Loke sover. MEN PLÖTSLIGT!<br>    "NNYYYYYAAAAAAA!......HAN SKA VI KNIVA!" - Loke<br>    "Vem ska vi kniva, Loke?" - Pontus<br>    "HAJEN!" - Loke', url: "https://www.facebook.com/ShitLokeSays/posts/471332499637697" },
    { quote: '"Fan jag får ilningar av att käka sånnadära neger påsar"<br>"Djungelvrål eller?" - Loke', url: "https://www.facebook.com/ShitLokeSays/posts/458848507552763" },
    { quote: '"Hon tycker sex är läskigt"<br>"Då har hon inte haft sex med mig!" - Loke', url: "https://www.facebook.com/ShitLokeSays/posts/451141548323459" },
    { quote: '"Asså Japan skulle blivit nästa nord Korea men sen så hittade de hentai"', url: "https://www.facebook.com/ShitLokeSays/posts/427261214044826" },
    { quote: '"Man kan gnida sin hand i gräset och göra ett hakkors... Det är kul att vara gud!"', url: "https://www.facebook.com/ShitLokeSays/posts/413518418752439" },
    { quote: '"Två kills i rad! Jag måste va släkt med Jesus!"', url: "https://www.facebook.com/ShitLokeSays/posts/412839882153626" },
    { quote: '"Ska jag platta håret eller ej?" - PJ<br>"Jag vet väll inte, jag är ingen diplomat" - Loke', url: "https://www.facebook.com/ShitLokeSays/posts/403126513124963" },
    { quote: 'Jag kallar denna story för "Loke får en uppenbarelse".<br>01:30 Loke - "Nu får du passa dig gud... Vi kommer för dig!" Mummlar Loke innan han faller ihop och somnar igen.', url: "https://www.facebook.com/ShitLokeSays/posts/402466639857617" },
    { quote: '"Jag känner det i pungen när det är bra väder men ingen lyssnar"', url: "https://www.facebook.com/ShitLokeSays/posts/379179558852992" }
];

var urls = [
  "https://facebook.com/ShitLokeSays",
  "facebook.com/ShitLokeSays",
  "ShitLokeSays",
  "SLS"
];

var replaceHtml = {
  "<br>": " ",
  "%": "%25"
};

function getQuote(quoteNumber) {
    if (quoteNumber === undefined) {
      // Get random quote
      quoteNumber = Math.round(Math.random() * (quotes.length - 1));
    }
    return quotes[quoteNumber];
}

function newQuote() {
    var quote = getQuote();
    var url = quote.url ? quote.url : "https://facebook.com/ShitLokeSays";

    // Prepare quote html before sending to Twitter
    // Removes <br> and makes % readable as a url
    var tweet = quote.quote.replace(/(%|<br>)/g, function(p1) {
      return replaceHtml[p1];
    }) + " - %23shitlokesays - ";

    // Add as long a signature as possible with Twitter's 140 character limit
    tweet += urls.reduce(function(p, c) {
      return tweet.length + p.length < 140 ? p : c;
    }, url);

    $('ul>a').attr('href', "https://twitter.com/intent/tweet?text=" + tweet);
    $('main>a').attr('href', url);
    $('blockquote').attr('cite', url);
    $('blockquote').html(quote.quote);
}

$(document).ready(function() {
    $('#more').on('click', newQuote);
    newQuote();
});
