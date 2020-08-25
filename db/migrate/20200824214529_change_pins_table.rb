class ChangePinsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :pins, :user_id
    add_index :pins, :user_id
  end
end
