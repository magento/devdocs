// TODO: Get rid of the jquery-ui dependency
// All divs with classname "collapsible" will have jquery-ui accordion functionality
$(".collapsible").accordion({
  collapsible: true,
  active: false,
  icons: { "header": "collapsible-ready", "activeHeader": "collapsible-active" },
  header: ".collapsible-title",
  heightStyle: "content"
});
