class CreateChanges < ActiveRecord::Migration[5.2]
  def change
    create_table :changes do |t|
      remove_index :pin_boards, :board_id
      remove_index :pin_boards, :pin_id
      add_index :pin_boards, :board_id, unique: true
      add_index :pin_boards, :pin_id, unique: true
      t.timestamps 
    end
  end
end
