/**
 * UserWishItemの削除
 */
Parse.Cloud.define("delete_user_wish_item", function(request, response) {
    var g = require('./globals.js');
    var ITEM_STATUS = g.ITEM_STATUS;
    request.params.itemStatus = ITEM_STATUS.DISABLE;
    Parse.Cloud.run('update_user_wish_item', request.params, 
    {
        success: function(result){
            response.success(result);
        },
        error : function(error){
            response.error(error);
        }
    })
});
