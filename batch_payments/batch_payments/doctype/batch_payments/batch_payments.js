// Copyright (c) 2022, Fiedler Consulting and contributors
// For license information, please see license.txt

frappe.ui.form.on('Batch Payments', {
	refresh: function(frm) {
		frm.add_custom_button(__('Purchase Invoice'), function() {
				erpnext.utils.map_current_doc({
					method: "batch_payments.batch_payments.doctype.batch_payments.batch_payments.get_items",
					source_doctype: "Purchase Invoice",
					target: frm,
					date_field: "posting_date",
					setters: {
						supplier: frm.doc.supplier || undefined,

					},
					get_query_filters: {
						docstatus: 1,
						is_paid: 0,
						currency: ["=", frm.doc.currency],
						status: ["!=", "Paid"]
					}
				})
			}, __("Get Items From"));

		
	}
});

