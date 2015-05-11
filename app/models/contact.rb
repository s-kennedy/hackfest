class Contact < ActiveRecord::Base
  validates :name, presence: true, length: { in: 2..255 }
  validates :email, presence: true, length: { in: 2..255 }
end
