$(document).ready(function() {
  $("form").submit(function(event) {
    var InputName1 = $("input#InputName1").val();
    var InputName2 = $("input#InputName2").val();
    var InputBike = $("input#InputBike").val();
    var optionsRadios1 = $("input:radio[name=optionsRadios1]:checked").val();
    var optionsRadios2 = $("input:radio[name=optionsRadios2]:checked").val();
    var optionsRadios3 = $("input:radio[name=optionsRadios3]:checked").val();
    var Monday = $("input#Monday").val();
    var Tuesday = $("input#Tuesday").val();
    var Wednesday = $("input#Wednesday").val();
    var Thursday = $("input#Thursday").val();
    var Friday = $("input#Friday").val();
    var Saturday = $("input#Saturday").val();

    $(".InputName1").text(InputName1);
    $(".InputName2").text(InputName2);
    $(".InputBike").text(InputBike);
    // $(".satisfaction").text(satisfaction)
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
