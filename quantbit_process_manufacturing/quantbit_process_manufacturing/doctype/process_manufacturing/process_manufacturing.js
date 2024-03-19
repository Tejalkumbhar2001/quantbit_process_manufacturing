frappe.ui.form.on('Process Manufacturing Raw Material', {
    yeild: async function(frm) {
        await frm.call({
            method: "check_yield",
            doc: frm.doc,
            args: {
                child_table_name: "materials",
                field_name: "yeild"
            }
        });
    },	
    quantity: async function(frm) {
        await frm.call({
            method: "update_yield_per",
            doc: frm.doc,
            args: {
                child_table_name: "materials",
                field_name_1: "quantity",
                field_name_2: "yeild"
            }
        });
        await frm.call({
            method: "get_total_of_any_field",
            doc: frm.doc,
            args: {
                child_table_name: "materials",
                child_field_name: "quantity",
                parent_field_name: "materials_qty"
            }
        });
    },

    amount: async function(frm) {
        await frm.call({
            method: "get_total_of_any_field",
            doc: frm.doc,
            args: {
                child_table_name: "materials",
                child_field_name: "amount",
                parent_field_name: "materials_amount"
            }
        });
    }
});

frappe.ui.form.on('Process Manufacturing Operation Cost', {
    cost: async function(frm) {
        await frm.call({
            method: "get_total_of_any_field",
            doc: frm.doc,
            args: {
                child_table_name: "operation_cost",
                child_field_name: "cost",
                parent_field_name: "total_operation_cost"
            }
        });
    }
});


frappe.ui.form.on('Process Manufacturing Finished Products', {
    yeild: async function(frm) {
        await frm.call({
            method: "check_yield",
            doc: frm.doc,
            args: {
                child_table_name: "finished_products",
                field_name: "yeild"
            }
        });
    },	
    quantity: async function(frm,cdt,cdn) {
		var child=locals[cdt][cdn]
        await frm.call({
            method: "get_yield_per_according_item",
            doc: frm.doc,
            args: {
                curr_child_table_name: "finished_products",
                curr_field_name_1: "quantity",
                curr_field_name_2: "yeild",
				parent_field_name:"materials_qty"
            }
        });
        await frm.call({
            method: "get_total_of_any_field",
            doc: frm.doc,
            args: {
                child_table_name: "finished_products",
                child_field_name: "quantity",
                parent_field_name: "finished_products_qty"
            }
        });
    },

    amount: async function(frm) {
        await frm.call({
            method: "get_total_of_any_field",
            doc: frm.doc,
            args: {
                child_table_name: "finished_products",
                child_field_name: "amount",
                parent_field_name: "finished_products_amount"
            }
        });
    }
});




frappe.ui.form.on('Process Manufacturing Scrap Item', {
    yeild: async function(frm) {
        await frm.call({
            method: "check_yield",
            doc: frm.doc,
            args: {
                child_table_name: "scrap",
                field_name: "yeild"
            }
        });
    },	
    quantity: async function(frm,cdt,cdn) {
		var child=locals[cdt][cdn]
        await frm.call({
            method: "get_yield_per_according_item",
            doc: frm.doc,
            args: {
                curr_child_table_name: "scrap",
                curr_field_name_1: "quantity",
                curr_field_name_2: "yeild",
				parent_field_name:"materials_qty"
            }
        });
        await frm.call({
            method: "get_total_of_any_field",
            doc: frm.doc,
            args: {
                child_table_name: "scrap",
                child_field_name: "quantity",
                parent_field_name: "scrap_qty"
            }
        });
    },

    amount: async function(frm) {
        await frm.call({
            method: "get_total_of_any_field",
            doc: frm.doc,
            args: {
                child_table_name: "scrap",
                child_field_name: "amount",
                parent_field_name: "scrap_amount"
            }
        });
    }
});





