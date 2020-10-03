class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
    t.integer :user_id
    t.integer :follower_id
    
    t.timestamps
    end
    add_index :follows, :user_id 
    add_index :follows, :follower_id
  end
end
