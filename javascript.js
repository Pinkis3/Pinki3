with (window.open("")) {
    document.open("text/html");
    document.write("<!--\n"); //for live version delete this line
    document.write(opener.document.documentElement.outerHTML.replace(/</g,"<").replace(/>/g, ">"));
    document.write("\n//-->"); //for live version delete this line
    document.close();
    document.title = "DOM Snapshot:" + opener.document.title;
    focus();
}
