class AddMobNewsletterColumnToApplicants < ActiveRecord::Migration
  def change
    add_column :applicants, :newsletter_mob, :string
    rename_column :applicants, :newsletter, :newsletter_ih
  end
end
