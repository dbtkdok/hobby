/**
 * Created by Administrator on 2016-11-17.
 * Design nas.
 */
var cnt = 0;
var cntList = new Array();
var final_1 = [1,2,3];
var final_2 = [4,5,6];
var final_3 = [7,8,9];
var final_4 = [10,11,12];
var final_5 = [13,14,15];
var final_6 = [16,17,18];
var final_7 = [19,20,21];
var final_8 = [22,23,24];
var final_9 = [25,26,27];

$(document).ready(function () {
    //HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.



});


$(function () {

    var input = document.getElementById("vd_text");

    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        $('#exampleModal').modal('show');
      }
    });

    $('#exampleModal').on('shown.bs.modal', function () {
        $("#vd_modal").removeClass("vd_box_show");
        var text = $("#vd_text").val();
        
        if(text == "") {
            $('#exampleModal').modal('hide');
            alert("먼저 파도에 적을 내용을 입력해주세요.");
        } else {
            $("#vd_text").val("");
            $("#vd_modal").addClass("vd_box_show");
            $("#pado_modal").text(text);
            $("#pado_modal").addClass("vd_box_back");
            
            var time = 1;
            var timer = setInterval(function() {
                time = time + 1;
                if(time == 5) {
                    //$("#pado_modal").text("");
                    $("#pado_modal").fadeOut(2000, "linear", function(){
                        $("#pado_modal").text("");
                        time = 1;
                        clearInterval(timer);
                        $('#exampleModal').modal('hide');
                        $("#pado_modal").show();
                    });
                }
            }, 1000);
            
        }
        
    })

    /*
    $('#vd_text').on("blur", function () {
        var time = 1;
        var timer = setInterval(function() {
            time = time + 1;
            if(time == 9) {
                $("#vd_text").val("");
                time = 1;
                clearInterval(timer);
            }
        }, 1000);
        
    });
    */

});

function fnMovePage(id, nextID) {
    if(nextID == "final") {
        //console.log(cntList);
        if(cntList.length == 27) {
            var final_cnt_1 = 0;
            var final_cnt_2 = 0;
            var final_cnt_3 = 0;
            var final_cnt_4 = 0;
            var final_cnt_5 = 0;
            var final_cnt_6 = 0;
            var final_cnt_7 = 0;
            var final_cnt_8 = 0;
            var final_cnt_9 = 0;
            var sum_final_score = 0;
            cntList.map(function(element){
                final_1.map(function(element1){
                    if(element.get("step_" + element1) != undefined && element.get("step_" + element1) != null) {
                        //console.log(element.get("step_" + element1));
                        final_cnt_1 += element.get("step_" + element1);
                    }
                })

                final_2.map(function(element2){
                    if(element.get("step_" + element2) != undefined && element.get("step_" + element2) != null) {
                        //console.log(element.get("step_" + element2));
                        final_cnt_2 += element.get("step_" + element2);
                    }
                })

                final_3.map(function(element3){
                    if(element.get("step_" + element3) != undefined && element.get("step_" + element3) != null) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_3 += element.get("step_" + element3);
                    }
                })

                final_4.map(function(element3){
                    if(element.get("step_" + element3) != undefined && element.get("step_" + element3) != null) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_3 += element.get("step_" + element3);
                    }
                })

                final_5.map(function(element3){
                    if(element.get("step_" + element3) != undefined && element.get("step_" + element3) != null) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_4 += element.get("step_" + element3);
                    }
                })

                final_6.map(function(element3){
                    if(element.get("step_" + element3) != undefined && element.get("step_" + element3) != null) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_5 += element.get("step_" + element3);
                    }
                })

                final_7.map(function(element3){
                    if(element.get("step_" + element3) != undefined && element.get("step_" + element3) != null) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_6 += element.get("step_" + element3);
                    }
                })

                final_8.map(function(element3){
                    if(element.get("step_" + element3) != undefined && element.get("step_" + element3) != null) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_7 += element.get("step_" + element3);
                    }
                })

                final_9.map(function(element3){
                    if(element.get("step_" + element3) != undefined && element.get("step_" + element3) != null) {
                        //console.log(element.get("step_" + element3));
                        final_cnt_8 += element.get("step_" + element3);
                    }
                })
            })
            var finalin = Math.max(final_cnt_1, final_cnt_2, final_cnt_3, final_cnt_4, final_cnt_5, final_cnt_6, final_cnt_7, final_cnt_8, final_cnt_9);
            $(id).addClass("none");
            $("#section_final").removeClass("none", "");
           
            if(final_cnt_1 == finalin) {
                $("#section_final").css('background-image', 'url(./img/final_result_1.png)');
            } else if(final_cnt_2 == finalin) {
                $("#section_final").css('background-image', 'url(./img/final_result_2.png)');
            } else if(final_cnt_3 == finalin) {
                $("#section_final").css('background-image', 'url(./img/final_result_3.png)');
            } else if(final_cnt_4 == finalin) {
                $("#section_final").css('background-image', 'url(./img/final_result_4.png)');
            } else if(final_cnt_5 == finalin) {
                $("#section_final").css('background-image', 'url(./img/final_result_5.png)');
            } else if(final_cnt_6 == finalin) {
                $("#section_final").css('background-image', 'url(./img/final_result_6.png)');
            } else if(final_cnt_7 == finalin) {
                $("#section_final").css('background-image', 'url(./img/final_result_7.png)');
            } else if(final_cnt_8 == finalin) {
                $("#section_final").css('background-image', 'url(./img/final_result_8.png)');
            } else if(final_cnt_9 == finalin) {
                $("#section_final").css('background-image', 'url(./img/final_result_9.png)');
            } 
             
            sum_final_score = final_cnt_1 + final_cnt_2 + final_cnt_3;
            //$("#fin_1").text(final_cnt_1);
            //$("#fin_2").text(final_cnt_2);
            //$("#fin_3").text(final_cnt_3);
            //$("#fin_top").text("90점");
            //console.log("final_cnt_1 :: ", final_cnt_1);
            //console.log("final_cnt_2 :: ", final_cnt_2);
            //console.log("final_cnt_3 :: ", final_cnt_3);
            //alert("final testsetset");
        } else {
            //console.log(cntList.length);
            //alert("final testsetset");
        }
    } else {
        $(id).addClass("none");
        $(nextID).removeClass("none", "");
    }
    
}

function fnMoveNextContent(id, clsNM, num) {
    var cntMap = new Map;
    var cntBool = false;
    $("#" + id + " li").removeClass('active', '');
    $("#" + id + " ." + clsNM).addClass('active');
    cntList.map(function(element){
        if(element.get(id) != undefined && element.get(id) != null) {
            cntBool = true;
            element.delete(id);
            element.set(id, num);
        }
        return cntBool;
    });
    if(!cntBool) {
        cntMap.set(id, num);
        cntList.push(cntMap);
    }
}









