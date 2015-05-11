class RegisterMailer < ApplicationMailer
  default from: 'sharon@ironhack.com'

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome, #{@user.name}')
  end

end
