class ChangeContactsTableToApplicants < ActiveRecord::Migration
  def change
    rename_table :contacts, :applicants
    add_column :applicants, :age, :string
    add_column :applicants, :gender, :string
    add_column :applicants, :interest, :string
    add_column :applicants, :background, :text
    rename_column :applicants, :register, :newsletter
    remove_column :applicants, :message
  end
end
