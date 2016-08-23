class AddTextToChats < ActiveRecord::Migration[5.0]
  def change
    Chat.destroy_all
    add_column :chats, :message, :text, null: false
  end
end
