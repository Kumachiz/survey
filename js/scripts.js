$(document).ready(function() {
  $("form").submit(function(event) {
    var InputName1 = $("input#InputName1").val();
    var InputName2 = $("input#InputName2").val();
    var InputBike = $("input#InputBike").val();
    var optionsRadios1 = $("input#optionsRadios1").val();
    var optionsRadios2 = $("input#optionsRadios2").val();
    var optionsRadios3 = $("input#optionsRadios3").val();
    var Monday = $("input#Monday").val();
    var Tuesday = $("input#Tuesday").val();
    var Wednesday = $("input#Wednesday").val();
    var Thursday = $("input#Thursday").val();
    var Friday = $("input#Friday").val();
    var Saturday = $("input#Saturday").val();

    $(".InputName1").text(InputName1);
    $(".InputName2").text(InputName2);
    $(".InputBike").text(InputBike);
    $(".optionsRadios1").text(optionsRadios1);
    $(".optionsRadios2").text(optionsRadios2);
    $(".optionsRadios3").text(optionsRadios3);
    $(".Monday").text(Monday);
    $(".Tuesday").text(Tuesday);
    $(".Wednesday").text(Wednesday);
    $(".Thursday").text(Thursday);
    $(".Friday").text(Friday);
    $(".Saturday").text(Saturday);

    $("#results").show();

    event.preventDefault();
  });
});
