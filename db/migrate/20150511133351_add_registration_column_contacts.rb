class AddRegistrationColumnContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :register, :string
  end
end
