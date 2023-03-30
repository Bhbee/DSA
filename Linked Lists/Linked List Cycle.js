var hasCycle = function(head) {
    let node1, nextnode;
    node1 = nextnode = head;

    while(nextnode && nextnode.next){
        node1 = node1.next;
        nextnode = nextnode.next.next;
        if(node1 === nextnode){
        return true;
        }
    }
    return false; 
};