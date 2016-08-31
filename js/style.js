/**
 * Created by Administrator on 2016/8/9.
 */
$(document).ready(function () {

    //选择表单类型 显示填写表单名称
    $('.popwin_formtype').on('click', function () {
        $(this).siblings(".sjmf-set-form-name").show().siblings().hide();
    });
    //点击创建并保存表单
    $('.creat-form-btn').on('click', function () {
        $('#sjmfmodal').modal('hide');
        $('.sjmf-set-form-name').hide().siblings().show();
        var $formName = $('.sjmf-set-name').val();
        var $formHtml ='<li class="form-creation new-form-li">'
            +'<div class="settop-container">'
            +'<span class="new-form-color set-top">设置置顶</span>'
            +'<div class="is-top-logo"></div>'
            +'</div>'
            +'<input class="name-of-form new-form-font" value="'+$formName+'" readonly="readonly">' //显示表单名称
            +'<div class="check-feedback pull-right new-form-color">查看反馈<em>(0)</em></div>'
            +'<div class="form-settings clearfix">'
            +'<div class="btn-group ">'
            +'<button type="button" class="btn btn-default dropdown-toggle form-settings-btn" data-toggle="dropdown">分组 <span class="caret"></span></button>'
            +'<ul class="dropdown-menu min-width-110" role="menu">'
            +'<li><a href="#">二号分组</a></li>'
            +'</ul>'
            +'</div>'
            +'<a class="form-edit sjmf-fll" href="#">编辑</a>'
            +'<a class=" form-derive sjmf-fll" href="#">生成</a>'
            +'<a class=" form-preView sjmf-fll" href="#">预览</a>'
            +'<div class="operate_more dropdown_wrapper pull-right">'
            +'<div class="btn-group ">'
            +'<button type="button" class="btn btn-default dropdown-toggle more-settings" data-toggle="dropdown">更多<span class="caret"></span></button>'
            +'<ul class="dropdown-menu width-li-62" role="menu">'
            +'<li><a href="#">重命名</a></li>'
            +'<li><a href="#">创建副本</a></li>'
            +'<li><a href="#">删除表单</a></li>'
            +'</ul>'
            +'</div>'
            +'</div>'
            +'<a class="form-info-more" href="javascript:void(0)">'
            +'<svg width="20" height="20" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">  @font-face { font-family: ifont; src: url(http://at.alicdn.com/t/font_1442373896_4754455.eot?#iefix)// format(embedded-opentype), url(http://at.alicdn.com/t/font_1442373896_4754455.woff) format(woff), url(http://at.alicdn.com/t/font_1442373896_4754455.ttf) format(truetype), url(http://at.alicdn.com/t/font_1442373896_4754455.svg#ifont) format(svg);}</style></defs><g class="transform-group"><g transform="scale(0.1953125, 0.1953125)"><path d="M511.913993 63.989249c-247.012263 0-447.924744 200.912481-447.924744 447.924744s200.912481 447.924744 447.924744 447.924744 447.924744-200.912481 447.924744-447.924744S758.926256 63.989249 511.913993 63.989249zM511.913993 895.677474c-211.577356 0-383.763481-172.186125-383.763481-383.763481 0-211.577356 172.014111-383.763481 383.763481-383.763481s383.763481 172.014111 383.763481 383.763481S723.491349 895.677474 511.913993 895.677474zM672.05913 511.913993l-159.973123 0L512.086007 288.123635c0-17.717453-14.277171-32.166639-31.994625-32.166639-17.717453 0-31.994625 14.449185-31.994625 32.166639l0 255.956996c0 17.717453 14.277171 31.994625 31.994625 31.994625l191.967747 0c17.717453 0 32.166639-14.277171 32.166639-31.994625C704.053754 526.191164 689.604569 511.913993 672.05913 511.913993z" fill="#E25E14"></path></g></g></svg>'
            +'</a>'
            +'</div>'
            +'<div class="form-moreInfos new-form-color" style="display: none;"><p class="p-moreInfos">创建时间：<span class="moreInfo-createAt">2016-07-17 13:03:55</span>创建人：<span class="moreInfo-createBy">lucifer</span>最近编辑：<span class="moreInfo-modifiedAt">2016-07-17 13:03:55</span>编辑人：'
            +'<span class="moreInfo_modifiedBy">lucifer</span></p></div>'
            +'</li>';
        $('.form-block-box').find('li').eq(0).before($formHtml);
    });
    //取消创建表单
    $('.cancel-form-btn').on('click', function () {
        $('#sjmfmodal').modal('hide');
        $('.sjmf-set-form-name').hide().siblings().show();
    });
    //显示表单更多消息，创建人、创建时间
    $('.form-info-more').bind('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).parent().next().show();
        } else {
            $(this).parent().next().hide();
        }

    });
    //显示设置表单
    $('.is-top-logo').mouseover(function () {
        $(this).prev().css({
            display: "block",
            top: 0,
            left: 0
        })
    });
    $('.set-top').mouseout(function () {
        $(this).css({
            display: "none",
            top: "-23px",
            left: "-63"
        })
    });
/*点击表单设置 添加组件 编辑组件之前切换隐藏下显示*/
    $('.formBuilder-interim-edit').on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
        var $showFormSet = $(this).attr("data-show");
        console.log($showFormSet);
       // var $sjmfEditForm = $(this).closest('.formBuilder-interim').find('.sjmfEditForm');
        var $parent = $(this).parent().next().next();
        $parent.children().addClass("hide");
        $parent.children("."+$showFormSet).removeClass("hide");

    })
    $('.sjmf-utility-first').find('li').on('click',function(){
        var $type = $(this).attr("data-formType");
        var $form ;
        switch ($type){
            case dhwb://单行文本
                $form ='<div class="form-group"><label for="sjmf-bd-name">单行文本</label><input type="text" class="form-control" readonly></div>';
            case sz:
                $form ='<div class="form-group"><label for="sjmf-bd-name">单行文本</label><input type="number" class="form-control" readonly></div>';
            case mdhwb:
                $form ='<div class="form-group"><label >多行文本</label><textarea class="form-control" rows="3" readonly></textarea></div>';
            case xlcd:
                $form ='<div class="form-group"> <label >下拉菜单</label> <select class="form-control" disabled> <option>1</option><option>2</option><option>3</option> </select> </div>';
            case dx:
                $form ='<label>单选</label><div class="radio"> <label> <input type="radio" name="optionsRadios"  value="option1" disabled>选项 1 </label> </div> <div class="radio"> <label> <input type="radio" name="optionsRadios"  value="option2" disabled>选项 2 </label> </div> <div class="radio"> <label> <input type="radio" name="optionsRadios"  value="option2" disabled>选项 3 </label> </div>';
            case mdx:
                $form =' <label>多选</label> <div class="checkbox"> <label> <input type="checkbox" value="" disabled>选项 1 </label> </div> <div class="checkbox"> <label> <input type="checkbox" value="" disabled>选项 2 </label> </div>';
            case tpmdx:
                $form ='<label >图片多选</label><ul class="clearfix p-l-0"> <li class="img-checkbox"> <div class="img-box"> </div> <label class="checkbox-inline " > <input type="checkbox"  value="option1" disabled>选项 1 </label> </li> <li class="img-checkbox"> <div class="img-box"> </div> <label class="checkbox-inline " > <input type="checkbox"  value="option1" disabled>选项 2 </label> </li> <li class="img-checkbox"> <div class="img-box"> </div> <label class="checkbox-inline " > <input type="checkbox"  value="option1" disabled>选项 3 </label> </li> </ul>';
            case tpdx:
                $form ='<label >图片单选</label> <ul class="clearfix p-l-0"> <li class="img-radio"> <div class="img-box"> </div> <label class="checkbox-inline"> <input type="radio" name="optionsRadiosinline" value="option1" class="img-radio-option" disabled>选项 1 </label> </li> <li class="img-radio"> <div class="img-box"> </div> <label class="checkbox-inline"> <input type="radio" name="optionsRadiosinline" value="option1" class="img-radio-option" disabled>选项 2 </label> </li> <li class="img-radio"> <div class="img-box"> </div> <label class="checkbox-inline"> <input type="radio" name="optionsRadiosinline" value="option1" class="img-radio-option" disabled>选项 3 </label> </li> </ul>';
            case rq:
            $form ='<div class="form-group"> <label >日期</label> <input type="text" class="form-control" readonly onfocus="WdatePicker()"> </div>';
            case fj:
                $form ='<div class="form-group"> <label >附件</label><input type="file" disabled></div>';
            case pf:
            $form =' <div id="readOnly-demo"></div>';
            case sp:
                $form ='<div class="sjmf-sp"></div>';
            case tp:
                $form ='<div class="sp-img"></div>';
            case fgx:
                $form ='<hr/>';
            case fy:
                $form ='<div class="ui-draggable"><div class="page-pre">第 1 页</div><div class="page"><div class="same-as-break break-color"></div> </div> <div class="page-next">第 2 页</div> </div>';


        }
    })

    $('.delete-li').on('click',function(){
        $(this).parent().remove();
    })
});
/*
function operateForm(){

}*/
