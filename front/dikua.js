/*  ====================================================================
**  http://www.diku.dk/diku.js - JavaScript til håndtering af nyt layout
**  $Id: diku.js,v 1.3 2005/11/24 12:05:59 shotokan Exp $
**  ====================================================================
*/

function _dikuList()
{
  var tables = document.body.getElementsByTagName("table");
  for (t in tables) {
    if (tables[t].className == "list") {
      var rows = tables[t].getElementsByTagName("tr");
      var cols = rows[0].getElementsByTagName("th");
      var offset = (cols.length < 1) ? 1 : 0;
      for (r in rows) {
        rows[r].className = "color" + (((r % 2) + offset) % 2);
      }
    }
  }
}


function _dikuOnLoad()
{
  _dikuList();
}
