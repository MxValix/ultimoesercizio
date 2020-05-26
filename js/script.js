let contatore = 0;

$(document).ready(function() {
    $("#todo").submit(function(event) {
        event.preventDefault()
        let inputText = $("#todolist").val()


        inputText =         `<li class="container" id="el${contatore++}" style="margin-bottom:39px">
        <div class="round">
        <input type="checkbox" id="checkbox${contatore}" />
        <label for="checkbox${contatore}"></label>
          <span style="margin-left:50px">${inputText}</span>
          <button class="premi-qua">
          <i class='fas fa-times-circle text-danger'></i>
      </button>
        </div>
      </li>
      `
       /* inputText = `<li id="el${contatore++}" ><div class="checkbox checkbox-circle">
                        <input type="checkbox">
                        <span>${inputText}</span>
                        <button class="premi-qua">
                            <i class='fas fa-times-circle text-danger'></i>
                        </button>
                        </div>
                    </li>` */
        $("#inserisci-qui").append(inputText)
        $("#todolist").val("")

    })
    $(document).on("click", ".premi-qua", function() {
        $(this).parent().remove()
    })


    $(document).on("click", "[type=checkbox]", function() {
        let style = "none";

        if ($(this).is(":checked")) {
            style = "line-through"
        }
        $(this).parent().css("text-decoration", style)

    })


})