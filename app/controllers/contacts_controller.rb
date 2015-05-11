class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      ContactsMailer.contact_form(@contact).deliver_now
      redirect_to root_path
    else
      flash[:error] = "Your message was not submitted correctly. Please try again."
      redirect_to '/#contact-form'
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :register, :message)
  end
end
