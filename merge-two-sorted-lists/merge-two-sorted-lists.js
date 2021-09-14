/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  
    if(!l1) return l2;        
    if(!l2) return l1;
  
    let dummyList = new ListNode(-1);
    let result = dummyList;
    while(l1 && l2){
        
        if(l1.val<l2.val){
            //l1이 작으면 dummy 로 
            dummyList.next =  new ListNode(l1.val);
            dummyList = dummyList.next;
            l1= l1.next
            
        }else if(l1.val>l2.val){
      
            dummyList.next =  new ListNode(l2.val);
            dummyList = dummyList.next
            l2 = l2.next;
      
        }else{
           
            let l1Node = new ListNode(l1.val);
            dummyList.next = l1Node;
            dummyList = dummyList.next
            l1= l1.next
        
       
            dummyList.next = new ListNode(l2.val);
             dummyList = dummyList.next
            l2 = l2.next;
        }
        if(l1){
            dummyList.next = l1
        }
        if(l2){
            dummyList.next = l2
        }
        
       
       
    }
    
    
   return result.next
};